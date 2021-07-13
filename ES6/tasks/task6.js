/*============================================================
6.	Write a function that filters all integer numbers from the given array. 
Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
Output: [7, 8]
============================================================== */

let array = [1.6, 11.34, 9.23, 7, 3.11, 8];

const integerNumbers = (arr) => {
  return arr.filter(element => parseFloat(element) === parseInt(element));
};

console.log(integerNumbers(array));

