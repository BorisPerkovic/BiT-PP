/*==================================================================
9.	Write a function to find the median element of array.
===================================================================*/
var array = [1, 15, 21, 75,136, 84, 32, 4, 5];


function median(array) {
  var result;
  for (var i = 0, j = array.length - 1; i < array.length; i++, j--) {
    if (array.length % 2 === 0) {
      if (i > j) {
        result = array[j] + 0.5;
        break;
      }
    }
    if (array.length % 2 !== 0) {
      if (i === j) {
        result = array[i];
        
      }
    }
  }

  return result;
}

var func = median(array);
console.log(func);