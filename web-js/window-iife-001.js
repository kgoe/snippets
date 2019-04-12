;

/**
 * INIT
 */
var app = {};

app.iife = function theIife(window, document) {
  console.log(window, document);
};

/**
 * EXECUTE
 */
(app.iife)(window, document);
