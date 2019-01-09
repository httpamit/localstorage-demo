let CompairModule = (function () {

  // hide the compairList section
  let compairListSection = document.querySelector('#compairListSection');

  compairListSection.style.display = 'none';

  // Select compair-list div to display selected product
  const compairListDOM = document.querySelector('.compair-list');

  // Cache all ADD_TO_COMPAIR button
  const addToCompairButtonsDOM = document.querySelectorAll('[data-action="ADD_TO_COMPAIR"]');

  // create a compair array to store data
  let compairList = [];

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

        const isInCompair = (compairList.filter(compairItem => (compairItem.name === product.name)).length > 0);

        if (!isInCompair) {
          compairListSection.style.display = 'block';
          compairList.push(product);
          insertHtmlToDom(product)
          // Store data in localStorage
          // localStorage.setItem('compairList', JSON.stringify(compairList));

          addToCompairButtonDOM.innerText = 'In Compair List'
          addToCompairButtonDOM.disabled = true;
        }
      })
    })
  };

  let removeItem = function () {
    const compairItemsDOM = document.querySelectorAll('.compair__item');
    console.log(compairItemsDOM);
  };

  // insert html to the dom
  let insertHtmlToDom = function (product) {
    compairListDOM.insertAdjacentHTML('beforeend', `
        <div class="compair__item">
          <img class="compair__item__image" src="${product.image}" alt="${product.name}" />
          <h3 class="compair__item__name">${product.name}</h3>
          <h3 class="compair__item__price">${product.price}</h3>
          <button class="btn btn--danger btn-small" data-action="REMOVE_ITEM">&times;</button>
        </div>
    `)
  };

  return {
    addToCompair: addToCompair,
    removeItem: removeItem
  };

})();

CompairModule.addToCompair();
CompairModule.removeItem();