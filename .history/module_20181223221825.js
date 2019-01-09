let Module = (function () {

  let addToCompair = function () {
    console.log('add to compair')
  };

  let removeItem = function () {
    console.log('remove')
  };

  let anotherMethod = function () {
    // public
  };

  return {
    someMethod: someMethod,
    anotherMethod: anotherMethod
  };

})();