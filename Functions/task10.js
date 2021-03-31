/*==================================================================
10.	Write a program that calculates the number of appearances of a letter a in a given string. Modify the program so it calculates the number of both letters a and A.
===================================================================*/
function letterApperances(string) {
  var result = "";
  var a = 0;
  var A = 0;
  for (i = 0; i < string.length; i++) {
    if (string[i] == "A") {
      A++;
    } else if (string[i] == "a") {
      a++;
    }
  }
  result +="Letter A in word "+  string + " shows " + A + " times\n";
  result +="Letter a in word "+  string + " shows " + a + " times";

  return result;
}

var string = "AnastAsijA";
console.log(letterApperances(string));