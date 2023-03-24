// File: MyClass.js
const Helper = require('./Helper-Bryan_Elmer_Purnomo.js');

class MyClass {
  constructor() {
    console.log(Helper.penambahan(10, 30)); // Output: 40
    console.log(Helper.pengurangan(100, 20)); // Output: 80
    console.log(Helper.perkalian(10, 10)); // Output: 100
    console.log(Helper.penjumlahan([60, 20, 30])); // Output: 110
  }
}

new MyClass();