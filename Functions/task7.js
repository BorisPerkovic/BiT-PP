/*==================================================================
7.	Write a program that calculates a number of digits of a given number. 
===================================================================*/

function numberDigits(a) {
  var string = "";
  var counter = 0;
  string += "Number is " + a;

  if (a < 0) {
    a *= -1
  }

  while (a >= 1) {
    a /= 10;
    counter++;
  }

  return string += " and has " + counter + " digits";
}

var a = -45878;
console.log(numberDigits(a));