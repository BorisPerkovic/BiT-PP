/*==================================================================
3.	Write a function that rotates a list by k elements.
For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]
===================================================================*/
var array = [1, 2, 3, 4, 5, 6];
var n = 2;


function rotArray(array, n) {
  var newArray = [];
  for (var i = n, j = 0; i < array.length + n; i++) {
    if (i >= array.length) {
      newArray[newArray.length] = array[j];
      j++;
    } else {
      newArray[newArray.length] = array[i];
    }
  }
  return newArray;
}

var func = rotArray(array, n);
console.log(func);