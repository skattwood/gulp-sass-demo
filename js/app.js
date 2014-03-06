// Test App File

// Self-envoking anonymous function
(function () {
  // ... all vars and functions are in this scope only
  // still maintains access to all globals
}());

// A car "class"
function Car(model) {

  this.model = model;
  this.color = "silver";
  this.year  = "2012";

  this.getInfo = function () {
    return this.model + " " + this.year;
  };
}
// Instantiate new Car Object
var myCar = new Car("Audi");
myCar.year = "2012";
console.log(myCar.getInfo());


