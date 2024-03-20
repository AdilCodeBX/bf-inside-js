/* eslint-disable strict */
const plusOne = require('./plusOne')

describe('plusOne function', () => {
  describe('Adding value to an empty array', () => {
    test('should return an array with the added value', () => {
      expect(plusOne([], 5)).toEqual([5]);
    });
  });

  describe('Adding value to an array with elements', () => {
    test('should return the array with the last element incremented by the given value', () => {
      expect(plusOne([1, 2, 3], 5)).toEqual([1, 2, 8]);
    });
  });

  describe('Adding value to an array with larger numbers', () => {
    test('should return the array with the last element incremented by the given value', () => {
      expect(plusOne([10, 20, 30], 5)).toEqual([10, 20, 35]);
    });
  });
});
