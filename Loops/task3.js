/*==================================================================
3.	Write a program to compute the sum and product of an array of integers.
==================================================================*/

var array = [1, 2, 3, 4];
var sum = 0;
var product = 1;

console.log("Numbers in arrays are: ");

for (var i = 0; i < array.length; i++) {
  console.log(array[i] + "\n");
  sum = sum + array[i];
  product = product * array[i];
  /*
    sum+=array[i];
    product*=array[i];
  */
}

console.log("Sum of all numbers in array is: " + sum + "\n");
console.log("Product of all numbers in array is: " + product + "\n");