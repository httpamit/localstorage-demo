'use strict';

// create a compair array to store data
let compairList = [];

// Select compair-list div to display selected product
const compairListDOM = document.querySelector('.compair-list');

// Cache all add to compair button
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
      addToCompairButtonDOM.innerText = 'In Compair List'

      addToCompairButtonDOM.disabled = true;

      const compairItemsDOM = document.querySelectorAll('.compair__item');

      compairItemsDOM.forEach(compairItemDOM => {

        if (compairItemDOM.querySelector('.compair__item__name').innerText === compairOBJ.name) {
          compairItemDOM.querySelector('[data-action="REMOVE_ITEM"]').addEventListener('click', () => {
            compairList.forEach(compairItem => {
              if (compairItem.name === compairOBJ.name) {
                compairItemDOM.classList.add('compair__item--removed');
                setTimeout(() => compairItemDOM.remove(), 250);
                compairList = compairList.filter(compairItem => compairItem.name !== compairOBJ.name);
                addToCompairButtonDOM.disabled = false;
                addToCompairButtonDOM.innerText = 'Add To Compair'
              }
            });
          })
        }

      })

    }
  });

});