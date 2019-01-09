(function (){

    // hide the compairList section
    let compairListSection = document.querySelector('#compairListSection');
    compairListSection.style.display = 'none';

    // create a compair array to store data
    let compairList = (JSON.parse(localStorage.getItem('compairList')) || []);

    // get the selected product count
    let productCount = compairList.length;


    // Select compair-list div to display selected product
    const compairListDOM = document.querySelector('.compair-list');

    // Cache all ADD_TO_COMPAIR button
    const addToCompairButtonsDOM = document.querySelectorAll('[data-action="ADD_TO_COMPAIR"]');

    if (compairList.length > 0){
      compairList.forEach(compairItem => {
        const product = compairItem;

        compairListSection.style.display = 'block';
        let productCount = compairList.length;
        insertItemToDOM(product)
        addToCompairButtonsDOM.forEach(addToCompairButtonDOM => {

            // Get product parent div
            const productDOM = addToCompairButtonDOM.parentNode;

            if(productDOM.querySelector('.product__name').innerText === product.name){
                handleActionButtons(addToCompairButtonDOM, product)
            }

         });
      })
    }

    addToCompairButtonsDOM.forEach(addToCompairButtonDOM => {
      addToCompairButtonDOM.addEventListener('click', () => {

        // Get product parent div
        const productDOM = addToCompairButtonDOM.parentNode;

        // Create compair object
        const product = {
          image: productDOM.querySelector('.product__image').getAttribute('src'),
          name: productDOM.querySelector('.product__name').innerText,
          price: productDOM.querySelector('.product__price').innerText,
        };

        // check selected product is exixt in compairList array or not
        const isInCompair = (compairList.filter(compairItem => (compairItem.name === product.name)).length > 0);

        if (!isInCompair) {

          compairListSection.style.display = 'block';
          let productCount = compairList.length;
          insertItemToDOM(product)
          compairList.push(product);

          // Store data in localStorage
          localStorage.setItem('compairList', JSON.stringify(compairList));

          handleActionButtons(addToCompairButtonDOM, product)

        }
      });

    });

    function insertItemToDOM(product){
      compairListDOM.insertAdjacentHTML('beforeend', `
              <div class="compair__item">
                <img class="compair__item__image" src="${product.image}" alt="${product.name}" />
                <h3 class="compair__item__name">${product.name}</h3>
                <h3 class="compair__item__price">${product.price}</h3>
                <button class="btn btn--danger btn-small" data-action="REMOVE_ITEM">&times;</button>
              </div>
          `)
    }

    function handleActionButtons(addToCompairButtonDOM, product){
      addToCompairButtonDOM.innerText = 'In Compair List'
          addToCompairButtonDOM.disabled = true;

          const compairItemsDOM = document.querySelectorAll('.compair__item');

          compairItemsDOM.forEach(compairItemDOM => {

            if (compairItemDOM.querySelector('.compair__item__name').innerText === product.name) {
              compairItemDOM.querySelector('[data-action="REMOVE_ITEM"]').addEventListener('click', () => {
                removeItem(addToCompairButtonDOM, product, compairItemDOM)
              })
            }

          })
    }

    function removeItem(addToCompairButtonDOM, product, compairItemDOM){
      console.log(product);
      compairList.forEach(compairItem => {
        if (compairItem.name === product.name) {
          compairItemDOM.classList.add('compair__item--removed');
          setTimeout(() => compairItemDOM.remove(), 250);
          compairList = compairList.filter(compairItem => compairItem.name !== product.name);

          // Update localStorage value
          localStorage.setItem('compairList', JSON.stringify(compairList));

          addToCompairButtonDOM.disabled = false;
          addToCompairButtonDOM.innerText = 'Add To Compair'
        }

        if(compairList.length === 0){
          compairListSection.style.display = 'none';
        }

      });
    }

})();