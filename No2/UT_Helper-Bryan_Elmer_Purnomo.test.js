const Helper = require('../No1/Helper-Bryan_Elmer_Purnomo.js');

describe('Helper functions', () => {
  test('penambahan', () => {
    expect(Helper.penambahan(2, 3)).toBe(5);
  });

  test('pengurangan', () => {
    expect(Helper.pengurangan(5, 2)).toBe(3);
  });

  test('perkalian', () => {
    expect(Helper.perkalian(4, 3)).toBe(12);
  });

  test('penjumlahan', () => {
    expect(Helper.penjumlahan([1, 2, 3])).toBe(6);
  });
});
