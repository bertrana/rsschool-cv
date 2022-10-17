'use strict';

var name = "John";
function printName() {
  console.log(name);
  var name = "Peter"
  console.log(name);
}

printName();


setTimeout(() => {
  let name = "Peter";
}, 1000);