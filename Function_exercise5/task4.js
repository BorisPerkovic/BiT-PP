/*==================================================================
4.	(skip :))Sort a previously defined array. Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]
===================================================================*/
var array = [13, 11, 15, 5, 6, 1, 8, 12];

function switchPlaces(array) {
  
  for (var i = 1; i < array.length; i++) {
    for (var j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        var x = array[i];
        array[i] = array[j];
        array[j] = x;
      }
    }
  }

  for(var i = 0; i < array.length; i++) {
    array[i] = array[i] * 2;
  }


  return array;
}

var func = switchPlaces(array);
console.log(func);