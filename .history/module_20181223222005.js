let Module = (function () {

  let addToCompair = function () {
    console.log('add to compair')
  };

  let removeItem = function () {
    console.log('remove')
  };

  let insertHtmlToDom = function () {
    console.log('insert')
  };

  return {
    someMethod: someMethod,
    anotherMethod: anotherMethod,
    insertHtmlToDom: insertHtmlToDom
  };

})();