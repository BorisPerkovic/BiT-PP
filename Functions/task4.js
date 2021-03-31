/*==================================================================
4.	Write a program that calculates an arithmetic mean of four numbers.
===================================================================*/

function arithmeticMean() {
  var sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum / arguments.length;
}

console.log(arithmeticMean(4, 5, 10 ,9, 12));