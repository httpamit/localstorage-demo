let CompairModule = (function () {

  // hide the compairList section
  let compairListSection = document.querySelector('#compairListSection');

  compairListSection.style.display = 'none';

  // Select compair-list div to display selected product
  const compairListDOM = document.querySelector('.compair-list');

  // Cache all ADD_TO_COMPAIR button
  const addToCompairButtonsDOM = document.querySelectorAll('[data-action="ADD_TO_COMPAIR"]');

  // create a compair array to store data
  let compairList = (JSON.parse(localStorage.getItem('compairList')) || []);

  let addToCompair = function () {
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

        if (!isInCompair) {

          compairListSection.style.display = 'block';
          productCount(compairList)
          insertItemToDOM(product)
          compairList.push(product);

          // Store data in localStorage
          localStorage.setItem('compairList', JSON.stringify(compairList));

          handleActionButtons(addToCompairButtonDOM, product)

        }

      })
    })
  };

  let removeItem = function () {
    console.log('remove')
  };

  let insertHtmlToDom = function () {
    console.log('insert')
  };

  return {
    addToCompair: addToCompair,
    removeItem: removeItem
  };

})();

CompairModule.addToCompair();