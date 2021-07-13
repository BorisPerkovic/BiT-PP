/*============================================================
10.	Write a function that checks if the given array is an array of positive integer values. 
	Input: [3, 11, 9, 5, 6]
	Output: yes

	Input: [3, -12, 4, 11]
	Output: no

============================================================== */

let array = [3, 11, 9, 5, 6];

const positiveIntValues = (arr) => {
  return arr.every(element => element >= 0);
}

positiveIntValues(array) ? console.log("Yes") : console.log("No");