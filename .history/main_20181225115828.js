(function (){

    // hide the compairList section
    let compairListSection = document.querySelector('#compairListSection');
    compairListSection.style.display = 'none';

    let clearAllButton = document.querySelector('[data-action="CLEAR_All"]');
    clearAllButton.addEventListener('click', () => {
      clearAll(addToCompairButtonsDOM)
    })

    // create a compair array to store data
    let compairList = (JSON.parse(localStorage.getItem('compairList')) || []);

    productCount()

    // Select compair-list div to display selected product
    const compairListDOM = document.querySelector('.compair-list');

    // Cache all ADD_TO_COMPAIR button
    const addToCompairButtonsDOM = document.querySelectorAll('[data-action="ADD_TO_COMPAIR"]');

    if (compairList.length > 0){
      compairList.forEach(compairItem => {
        const product = compairItem;

        compairListSection.style.display = 'block';
        productCount()
        insertItemToDOM(product)
        addToCompairButtonsDOM.forEach(addToCompairButtonDOM => {

            // Get product parent div
            const productDOM = addToCompairButtonDOM.parentNode;

            if(productDOM.querySelector('.product__name').innerText === product.name){
              handleRemoveButtons(addToCompairButtonDOM, product)
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
          productId: productDOM.querySelector('.product__name').getAttribute('data-id'),
          price: productDOM.querySelector('.product__price').innerText,
        };

        // check selected product is exixt in compairList array or not
        const isInCompair = (compairList.filter(compairItem => (compairItem.name === product.name)).length > 0);
        console.log(compairList.length);
        if (!isInCompair) {

          compairListSection.style.display = 'block';
          productCount()
          insertItemToDOM(product)
          compairList.push(product);

          // Store data in localStorage
          localStorage.setItem('compairList', JSON.stringify(compairList));

          handleRemoveButtons(addToCompairButtonDOM, product)

        }

        if(compairList.length === 4){
          addToCompairButtonDOM.disabled = true;
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

    function handleRemoveButtons(addToCompairButtonDOM, product){
        addToCompairButtonDOM.innerText = 'In Compair List'
        addToCompairButtonDOM.disabled = true;

        // call the product count to update the selected product count
        productCount()
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
      compairList.forEach(compairItem => {
        if (compairItem.name === product.name) {
          compairItemDOM.classList.add('compair__item--removed');
          setTimeout(() => compairItemDOM.remove(), 250);
          compairList = compairList.filter(compairItem => compairItem.name !== product.name);

          // Update localStorage value
          localStorage.setItem('compairList', JSON.stringify(compairList));

          // call the product count to update the selected product count
          productCount()

          // enable the current button so that user re-select the product and change the button text name
          addToCompairButtonDOM.disabled = false;
          addToCompairButtonDOM.innerText = 'Add To Compair'
        }

        if(compairList.length === 0){
          compairListSection.style.display = 'none';
        }

      });
    }

    // get the selected products count
    function productCount(){
      let listCount = document.querySelector('.list-count');
      listCount.innerText = `Compare These Products (${compairList.length} of 4)`
    }

    // clear all
    function clearAll(addToCompairButtonDOM){
      compairList = [];
      localStorage.removeItem('compairList');
      compairListSection.style.display = 'none';
      addToCompairButtonDOM.disabled = false;
      addToCompairButtonDOM.innerText = 'Add To Compair'
    }

})();