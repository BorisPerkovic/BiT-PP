/*==================================================================
3.	Write a program to filter out falsy values from the array.
[NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]
===================================================================*/
var array = [NaN, 0, 15, false, -22, '', undefined, 47, null];

function filter(array) {
  var newArray = [];

  for ( i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray[newArray.length] = array[i];
    }
  }
  return newArray;
}
console.log(filter(array)); 