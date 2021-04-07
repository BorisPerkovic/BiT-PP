/*==================================================================
4.	Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2
===================================================================*/
function letterApperances(string, letter) {
  var result = "";
  var a = 0;
  for (i = 0; i < string.length; i++) {
    if (string[i] == letter) {
      a++;
    }
  }
  result += "Letter " + letter + " in string '" + string + "' shows " + a + " times";

  return result;
}

var string = "My random string";
var letter = "n";
console.log(letterApperances(string, letter));