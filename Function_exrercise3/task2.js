/*==================================================================
2.	Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.
[NaN, 0, 15, false, -22, '', undefined, 47, null]
===================================================================*/
var array = [NaN, 0, 15, false, -22, '', undefined, 47, null];

function convertArray(array) {
  var result = "";

  for (i = 0; i < array.length; i++) {
    if (isFinite(array[i]) && array[i] !== null) {
      result += array[i];
    }
  }
  return result;
}

var func = convertArray(array);
console.log(func);
