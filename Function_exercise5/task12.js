/*==================================================================
12.	Write a program that calculates the greatest common divisor of two integers. Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.
Input:  192 42 | 81 9
Output: 6      | 9
===================================================================*/
var a = 192;
var b = 42;

function commonDivisor(a, b) {
  var divisor;
  while (a !== b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  divisor = a;

  return divisor;
}

var func = commonDivisor(a, b);
console.log(func);
