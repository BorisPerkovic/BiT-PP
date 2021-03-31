/*==================================================================
11.	Write a program that concatenates a given string given number of times. For example, if “abc” and 4 are given values, the program prints out abcabcabcabc. 
===================================================================*/
function stringOfNumber(a, b) {
  var string = "";

  for (i = 0; i < b; i++) {
    string += a;
  }

  return string;
}

var a = "abc";
var b = 6;

console.log(stringOfNumber(a, b));
