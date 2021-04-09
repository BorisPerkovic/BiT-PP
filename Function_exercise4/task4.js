/*==================================================================
4.	Write a program that finds the second smallest number and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2
===================================================================*/
var array = [4, 2, 2, -1, 6];

function nextToMin(array) {
  var min = Infinity;
  var nextMin = Infinity;
  
  for (var i = 0; i < array.length; i++) {
    if (min > array[i]) {
      nextMin = min;
      min = array[i];
    } else if (nextMin > array[i]) {
      nextMin = array[i];
    }
  }

  return nextMin;
}

var func = nextToMin(array);
console.log(func);