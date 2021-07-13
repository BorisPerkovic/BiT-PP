/*============================================================
3.	Write a function that increases each element of the given array by the given value. If the value is omitted, increase each element of the array by 1.  
	Input: [4, 6, 11, -9, 2.1], 2
	Output: [6, 8, 13, -7, 4.1]
============================================================== */
let array = [4, 6, 11, -9, 2.1];
let increaser = 2;

const increaseElements = (arr, val = 1) => {
  return arr.map(element => element + val);
};

console.log(increaseElements(array, increaser));