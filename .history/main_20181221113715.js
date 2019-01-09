'use strict';
(function() {

  // Select compair-list div to display selected product
  const compairListDOM = document.querySelectorAll('.compair-list');

  // Cashe all add to compair button
  const addToCompairButtonsDOM = document.querySelectorAll('[data-action="ADD_TO_COMPAIR"]');

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

      compairListDOM.insertAdjacentHTML('beforeend', `
          <div class="compair__item">
            <img class="compair__item__image" />
          </div>
      `)
    });
  });

})();