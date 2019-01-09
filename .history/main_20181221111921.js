'use strict';
(function() {

  // Cashe all add to compair button
  const addToCompairButtonsDOM = document.querySelectorAll('[data-action="ADD_TO_COMPAIR"]');

  addToCompairButtonsDOM.forEach(addToCompairButtonDOM => {
    addToCompairButtonDOM.addEventListener('click', () => {


      const productDOM = addToCompairButtonDOM.parentNode;
      console.log(productDOM);
      const product = {
        image: productDOM.querySelector('.product__image').getAttribute('src'),
        name: productDOM.querySelector('.product__name').innerText,
        price: productDOM.querySelector('.product__price').innerText,
      };

      console.table(product);
    });
  });

})();