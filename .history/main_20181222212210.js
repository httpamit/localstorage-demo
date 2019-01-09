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

            }

          });
      })

    }



})();