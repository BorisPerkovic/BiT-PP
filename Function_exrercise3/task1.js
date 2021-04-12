/*==================================================================
1.	Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).
"My random string", "JS " -> "JS My random string"
"My random string", "JS ", 10 -> "My random JS string"
===================================================================*/
var string = "My random string";
var addString = "JS ";
var posNumber = 10;

var insertStringPos = function (string, addString, posNumber) {
  posNumber = posNumber || 1;
  if(posNumber === 1) {
    return addString + string; 
  }
  var result = "";
  for ( i = 0; i < string.length; i++) {
    if ( i === posNumber) {
      result += addString;
    }
    result += string[i];
  }
  return result;
}

var func = insertStringPos(string, addString, posNumber);
console.log(func);