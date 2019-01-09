let Module = (function () {

  let addToCompair = function () {
    this.insertHtmlToDom();
  };

  let removeItem = function () {
    console.log('remove')
  };

  let insertHtmlToDom = function () {
    console.log('insert')
  };

  return {
    someMethod: someMethod,
    anotherMethod: anotherMethod
  };

})();