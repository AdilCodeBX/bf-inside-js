'use strict';

/**
 * @param {number[]} arr
 * @param {number[]} value
 * @return {number[]}
 */
const plusOne = (arr, value) => {
  if (arr.length === 0) return [value];
  const lastNumber = arr[arr.length - 1];
  arr[arr.length - 1] = lastNumber + value;
  return arr;
}
 
module.exports = plusOne

const numbers = [1, 2, 3, 4];
const newValue = 1;
console.log(plusOne(numbers, newValue));
