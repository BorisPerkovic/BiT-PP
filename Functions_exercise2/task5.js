/*==================================================================
5.	Write a function to find the position of the first occurrence of a character in a string. The result should be the position of character. If there are no occurrences of the character, the function should return -1.
===================================================================*/
function occurence (string, letter) {
  var result ;

  for ( i = 0; i < string.length; i++) {
    if (string[i] == letter) {
      result = i;
      break;
    }
    else {
       result = -1;
    }
  }

  return result;
}

var string = "My random string";
var letter = "s";

console.log(occurence(string, letter));


