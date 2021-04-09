/*==================================================================
5.	Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16
===================================================================*/
var array = [3, 11, -5, -3, 2];


function sumOfPositive(array) {
  var result = "";
  var sum = 0;

  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      sum += array[i];
    }
  }
  result = "Sum of positive element in array is " + sum; 
  return result;
}

var func = sumOfPositive(array);
console.log(func);