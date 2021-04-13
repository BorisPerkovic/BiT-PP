/*==================================================================
6.	Write a function to input temperature in Centigrade and convert to Fahrenheit.
===================================================================*/
var c = 25;

function temperature(c) {
  var result;
  var temp = (9 * c / 5) + 32;
  result = c + "°C is " + temp + "°F";

  return result;
}

var func = temperature(c);
console.log(func);

