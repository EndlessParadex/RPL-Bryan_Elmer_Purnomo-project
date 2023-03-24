// File: Helper.js
class Helper {
  static penambahan(a, b) {
    return a + b;
  }

  static pengurangan(a, b) {
    return a - b;
  }

  static perkalian(a, b) {
    return a * b;
  }

  static penjumlahan(arr) {
    return arr.reduce((total, num) => total + num, 0);
  }
}

module.exports = Helper;