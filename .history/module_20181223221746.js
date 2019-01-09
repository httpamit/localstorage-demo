let Module = (function () {

  let addToCompair = function () {
    console.log('add to compair')
  };

  let someMethod = function () {
    // public
  };

  let anotherMethod = function () {
    // public
  };

  return {
    someMethod: someMethod,
    anotherMethod: anotherMethod
  };

})();