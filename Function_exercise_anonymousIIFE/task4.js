/*==================================================================
4.	Write a function with parameters name and surname that returns a function that suggests an email in the form name.surname@gmail.com. 
Input: boris perkovic
Output: pera.peric@gmail.com
===================================================================*/

var string = "boris perkovic";

var email = function (string) {
  var result = "";
  for(var i = 0; i < string.length; i++) {
    if(string[i] == " ") {
      result += ".";
    }
    else if ( i === string.length - 1) {
      result += string[i];
      result += "@gmail.com";
    }
    else {
      result += string[i];
    }
  } 

  return result;
}

console.log(email(string));