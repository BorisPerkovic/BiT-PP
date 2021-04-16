/*==================================================================
13.	Write a function to find all the numbers greater than the average.
===================================================================*/
var array = [1, 2, 13, 11, 10, 12];


function average(array) {
  var newArray = [];
  var sum = 0;

  for (i = 0; i < array.length; i++) {
      sum += array[i];
  }

  var average = sum / array.length;

  for (j = 0; j < array.length; j++) {
      if (array[j] > average) {
          newArray[newArray.length] = array[j];
      }
  }

  return newArray;
}

var func = average(array);
console.log(func);