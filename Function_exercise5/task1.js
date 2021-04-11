/*==================================================================
1.	Find the min and max element in the following array and switch their places. Print out the modified array in the console.
Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]
===================================================================*/
var array = [3, 500, 12, 149, 53, 414, 1, 19];

function switchPlaces(array) {
  var min = array[0];
  var max = array[0];
  var newArray = array;

  for (var i = 0; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
      var minIndex = i;
    }

    if (max < array[i]) {
      max = array[i];
      var maxIndex = i;
    }
  }
  newArray[minIndex] = max;
  newArray[maxIndex] = min;

  return newArray;
}

var func = switchPlaces(array);
console.log(func);