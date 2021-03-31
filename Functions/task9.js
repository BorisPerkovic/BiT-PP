/*==================================================================
9.	Write a program that calculates the sum of odd elements of a given array. 
===================================================================*/
function sumOfOdd(a) {
  var string = "";
  var sum = 0;

   
  for (i = 0; i < a.length; i++) {
    if ( a[i] % 2 !== 0) {
      sum += a[i];
    }
  }
  return string += "Sum of all odd numbers in array " + a + " is " + sum;
}

var a = [2, 4, 7, 8, 7, 7, 1];
console.log(sumOfOdd(a));