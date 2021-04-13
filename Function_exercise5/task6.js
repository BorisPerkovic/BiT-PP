/*==================================================================
6.	Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 and displayed in console.
Output: 2350000
===================================================================*/
var a = 1000;
var b = 500;

function oddEven(a, b) {
  var sum = 0;
  for (var i = 1; i <= a; i++) {
    if (i % 2 === 0) {
      sum += i;
    } else if (i % 2 === 1 && i <= b) {
      sum -= i;
    }
  }

  sum *= 12.5;
  return sum;
}

var func = oddEven(a, b);
console.log(func);