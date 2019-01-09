let CompairModule = (function () {

  // hide the compairList section
  let compairListSection = document.querySelector('#compairListSection');

  compairListSection.style.display = 'none';

  // create a compair array to store data
  let compairList = (JSON.parse(localStorage.getItem('compairList')) || []);

  let addToCompair = function () {
    console.log(compairList);
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