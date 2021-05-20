/*==================================================================
a.	Write a function that checks if a given string is written in all capitals.
b.	Write a function that checks if a given string contains any digits.
c.	Write a function that checks if a given string is a valid hexadecimal color.
d.	Write a function that checks if a given number belongs to the interval from 1900 to 2018. 
e.	Write a function named validator that returns an object with properties stringValidator, passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).
==================================================================*/
var string1 = "SomeString";
var string2 = "Bomb1na";
var string3 = "00FF00";

/* a task */
function allCapitals (value) {
  var output;
  var string1UpperCase = value.toUpperCase();
  if(string1UpperCase == value) {
    output = "String is written in all capitals";
  } else {
    output = "String isn't written in all capitals";
  }

  return output;
};

/* b task */
function checkIsDigit(params) {
  var input = params + "";
  var output;
  for (var i = 0; i < input.length; i++) {
    if (isFinite(parseInt(input[i]))) {
      output = "Contains digit!";
      break;
    } else {
      output = "No digit/s!";
    }
  }
  return output;
}

/* c task */
/* function ifHexadecimal(params) {
  var output;

  if(params.length !== 6)
  return output;
} */

console.log(allCapitals(string1));
console.log(checkIsDigit(string2));