let CompairModule = (function () {

  // create a compair array to store data
  let compairList = (JSON.parse(localStorage.getItem('compairList')) || []);

  let addToCompair = function () {
    console.log('jks')
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