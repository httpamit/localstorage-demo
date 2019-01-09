let Module = (function () {

  let privateMethod = function () {
    // private
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