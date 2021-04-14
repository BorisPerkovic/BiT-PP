/*==================================================================
3.	Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements. 
	Input: prograMming
	Output: progra**ing, 2
===================================================================*/

var string = "prograMming";

var letters = function (string) {
  var result = "";
  var counter = 0;
  for(var i = 0; i < string.length; i++) {
    if(string[i] == "m" || string[i] == "M") {
      result += "*";
      counter++;
    }
    else {
      result += string[i];
    }
  } 

  return result +", "+ counter;
}

console.log(letters(string));