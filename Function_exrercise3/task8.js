/*==================================================================
8.	Write a function to find a word within a string.
'The quick brown fox', 'fox' -> "'fox' was found 1 times"
'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times"
===================================================================*/
var string = "aa bb cc dd aa";
var word = "aa";

function wordInString(string, word) {
  var result = "";
  var count = 0;
  var count2 = 0;
  for (i = 0; i < string.length; i++) {
    if (string[i] == word[0]) {
      for (j = i; j < i + word.length; j++) {
        if (string[j] == word[j - i]) {
          count2++;
        }
        if (count2 == word.length) {
          count++;
        }
      }
      count2 = 0;
    }
  }
  result = word + " was found " + count + " times.";

  return result;
}

var func = wordInString(string, word);
console.log(func);