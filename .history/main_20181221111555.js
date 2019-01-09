'use strict';
(function() {

  // Cashe
  const addToCartButtonsDOM = document.querySelectorAll('[data-action="ADD_TO_COMPAIR"]');

  addToCartButtonsDOM.forEach(addToCartButtonDOM => {
    addToCartButtonDOM.addEventListener('click', () => {
      const productDOM = addToCartButtonDOM.parentNode;
      const product = {
        image: productDOM.querySelector('.product__image').getAttribute('src'),
        name: productDOM.querySelector('.product__name').innerText,
        price: productDOM.querySelector('.product__price').innerText,
      };

      console.table(product);
    });
  });

})();