/*==================================================================
8.	Write a function to find the maximum and minimum elements. Function returns an array.
===================================================================*/
var array = [1, 15, 21, 3, 84, 32, 4, 5];

function minMax (array) {
  var min = array[0];
  var max = array[0];
  var newArray = [];
  for (var  i = 0; i < array.length; i++ ) {
    if ( array[i] < min ) {
      min = array[i];
    }

    if(array[i] > max) {
      max = array[i];
    }
  }
  newArray[0] = min;
  newArray[1] = max;
  return newArray;
}

var func = minMax(array);
console.log(func);