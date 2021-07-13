/*============================================================
12.	Write a function that calculates the maximum of the given array. 
Input: [2, 7, 3, 8, 5.4] 
	Output: 8

============================================================== */
let array = [2, 7, 3, 8, 5.4];

const maximumOfArray = (arr) => {
  arr.sort((a, b) => b - a);
  return arr[0];
}

console.log(maximumOfArray(array));