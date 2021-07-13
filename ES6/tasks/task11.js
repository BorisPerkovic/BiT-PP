/*============================================================
11.	Write a function that calculates the product of the elements of the array. 
Input: [2, 8, 3]
Output:  48
============================================================== */

let array = [2, 8, 3];

const arrayProduct = (arr) => arr.reduce((a, b) => a * b);

console.log(arrayProduct(array));
