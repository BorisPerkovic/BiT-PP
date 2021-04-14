/*==================================================================
5.	Write a function that returns a function that calculates a decimal value of the given octal number. 
Input: 034
Output: 28
===================================================================*/

var num = 034;

var octal = function (num) {
  var octalNumber = parseInt(num);

  return octalNumber;
}

console.log(octal(num));