/*==================================================================
7.	Write a function to convert string into an array. Space in a string should be represented as “null” in new array.
  "My random string" -> ["M", "y", null, "r", "a"]
  "Random" -> ["R", "a", "n", "d", "o", "m"]
===================================================================*/
function occurence (string) {
  var newArray = [];

  for ( i = 0; i < string.length; i++) {
    if (string[i] == " ") {
      newArray[newArray.length] = null;
    }
    else {
      newArray[newArray.length] = string[i];
    }
  }

  return newArray;
}

var string = "My random string";

console.log(occurence(string));
