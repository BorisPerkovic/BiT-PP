/*============================================================
8.	Write a function that returns indexes of the elements greater than 10. 
	Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
	Output: 1, 2, 5
============================================================== */

const indexesGreater = (...arg) =>  {
  return arg
  .filter(element => element > 10)
  .map(element => arg.indexOf(element)); 
}
console.log(indexesGreater(1.6, 11.34, 29.23, 7, 3.11, 18));