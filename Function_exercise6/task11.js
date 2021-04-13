/*==================================================================
11.	Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned.
===================================================================*/
var array = [1, 15, 21, 75, 84, 32, 4, 5, 198];

function firstMiddleLast(array) {
  var middleElement;
  var firstElemnt = array[0];
  var lastElement = array[array.length - 1];
  var newArray = [];

  if (array.length === 0) {
    return newArray;
  }

  if (array.length % 2 === 0) {
    newArray[newArray.length] = firstElemnt;
    newArray[newArray.length] = lastElement;
    return newArray;
  }
  
  if (array.length % 2 !== 0) {
    for (var i = 0, j = array.length - 1; i < array.length; i++, j--) {
      if (i === j) {
        middleElement = array[i];
        newArray[newArray.length] = firstElemnt;
        newArray[newArray.length] = middleElement;
        newArray[newArray.length] = lastElement;
        return newArray;
      }
    }
  }
}

var func = firstMiddleLast(array);
console.log(func);