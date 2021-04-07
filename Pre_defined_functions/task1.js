/*==================================================================
1.	Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
  Input: ["1", "21", undefined, "42", "1e+3", Infinity]
  Output: [1, 21, 42, 1000]
===================================================================*/

var array = ["1", "21", undefined, "42", "1e+3", Infinity];

function convertArray(array) {
  var result = [];

  for (i = 0; i < array.length; i++) {
    if (isFinite(array[i]) === true) {
      result[result.length] = parseFloat(array[i]);
    }
  }
  return result;
}

console.log(convertArray(array));