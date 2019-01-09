(function (){

    // create a compair array to store data
    let compairList = (JSON.parse(localStorage.getItem('compairList')) || []);

    // Select compair-list div to display selected product
    const compairListDOM = document.querySelector('.compair-list');

    // Cache all ADD_TO_COMPAIR button
    const addToCompairButtonsDOM = document.querySelectorAll('[data-action="ADD_TO_COMPAIR"]');

    if (compairList.length > 0){
      compairList.forEach(compairItem => {

        const product = compairItem;

        compairListDOM.insertAdjacentHTML('beforeend', `
              <div class="compair__item">
                <img class="compair__item__image" src="${product.image}" alt="${product.name}" />
                <h3 class="compair__item__name">${product.name}</h3>
                <h3 class="compair__item__price">${product.price}</h3>
                <button class="btn btn--danger btn-small" data-action="REMOVE_ITEM">&times;</button>
              </div>
          `)

          addToCompairButtonsDOM.forEach(addToCompairButtonDOM => {

            // Get product parent div
            const productDOM = addToCompairButtonDOM.parentNode;

            if(productDOM.querySelector('.product__name').innerText === product.name){
              addToCompairButtonDOM.innerText = 'In Compair List'
              addToCompairButtonDOM.disabled = true;

              addToCompairButtonsDOM.forEach(addToCompairButtonDOM => {
                addToCompairButtonDOM.addEventListener('click', () => {

                  // Get product parent div
                  const productDOM = addToCompairButtonDOM.parentNode;

                  // Create compair object
                  const compairOBJ = {
                    image: productDOM.querySelector('.product__image').getAttribute('src'),
                    name: productDOM.querySelector('.product__name').innerText,
                    price: productDOM.querySelector('.product__price').innerText,
                  };

                  // check selected product is exixt in compairList array or not
                  const isInCompair = (compairList.filter(compairItem => (compairItem.name === compairOBJ.name)).length > 0);

                  if (!isInCompair) {
                    compairListDOM.insertAdjacentHTML('beforeend', `
                        <div class="compair__item">
                          <img class="compair__item__image" src="${compairOBJ.image}" alt="${compairOBJ.name}" />
                          <h3 class="compair__item__name">${compairOBJ.name}</h3>
                          <h3 class="compair__item__price">${compairOBJ.price}</h3>
                          <button class="btn btn--danger btn-small" data-action="REMOVE_ITEM">&times;</button>
                        </div>
                    `)
                    compairList.push(compairOBJ);

                    // Store data in localStorage
                    localStorage.setItem('compairList', JSON.stringify(compairList));

                    addToCompairButtonDOM.innerText = 'In Compair List'
                    addToCompairButtonDOM.disabled = true;

                    const compairItemsDOM = document.querySelectorAll('.compair-list');
                    console.log(compairItemsDOM)

                  }
                });

              });

            }

          });
      })

    }



})();