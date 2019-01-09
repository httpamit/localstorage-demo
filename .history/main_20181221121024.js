'use strict';

  // create a compair array to store data
  const compairArray = [];

  // Select compair-list div to display selected product
  const compairListDOM = document.querySelector('.compair-list');

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
            <img class="compair__item__image" src="${compairOBJ.image}" alt="${compairOBJ.name}" />
            <h3 class="compair__item__name">${compairOBJ.name}</h3>
            <h3 class="compair__item__price">${compairOBJ.price}</h3>
          </div>
      `)

      compairArray.push(compairOBJ);
      addToCompairButtonDOM.innerText = 'In Compair List'

    });
  });