/*==================================================================
3.	Write a program that checks if a given number is a three digit long number.
===================================================================*/

 var a = -251021;

function digitLongNumber (a) {
  var result = "";

  if ( a < 0) {
    a *= -1;
  }

  if (a >= 100 && a <= 999 ) {
    result += "Number " + a + " is a three digit number";
  } else {
    result += "Number " + a + " is not three digit number";

  }

  return result;
}

var digit = digitLongNumber(a);
console.log(digit);