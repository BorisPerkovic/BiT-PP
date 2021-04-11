/*==================================================================
11.	Check if a given string is a palindrome (spaces are ignored).
Input:  eye  | Geek  | a nut for a jar of tuna
Output: true | false | true
===================================================================*/
var string = "a nut for a jar of tuna";

function reversedString(string) {
  var stringAsc = "";
  var stringDesc = "";
  for (var i = string.length - 1, j = 0; i >= 0, j < string.length; i--, j++) {
    if (string[i] !== " ") {
      stringDesc += string[i];
    }
    if (string[j] !== " ") {
      stringAsc += string[j];
    }
  }

  if (stringAsc == stringDesc) {
    return true;
  } else {
    return false;
  }
 
}

var func = reversedString(string);
console.log(func);