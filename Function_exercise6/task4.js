/*==================================================================
4.	Write a function that takes a number and returns array of its digits.
===================================================================*/
var num = 12345;


function number(num) {
  var result = [];
  var digit;
  var string = "" + num;

  for (i = 0; i < string.length; i++) {
    digit = parseInt(string[i]);
    result[i] = digit;
  }


  return result;
}

var func = number(num);
console.log(func);