/*==================================================================
2.	Write IIFE that calculates the surface area of the given rectangle with sides a and b. 
Input: 4 5
Output: 20 
===================================================================*/
var a = 4;
var b = 5;

var area = function (a, b) {
  var surface = a * b;
  var string = "a = " + a + " , b = " + b + ", surface = " + surface;
  return string;
};

console.log(area(a, b));