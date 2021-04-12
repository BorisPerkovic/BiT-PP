/*==================================================================
4.	Write a function that reverses a number. The result must be a number.
12345 -> 54321 // Output must be a number
===================================================================*/
var a = -12345;

function reverseNum(a) {
  var result = 0;
  var num = a;
  while (num !== 0) {
    result *= 10;
    result += num % 10;
    num = num - num % 10;
    num = num / 10;
  }
  return result;
}
var func = reverseNum(a);
console.log(func);