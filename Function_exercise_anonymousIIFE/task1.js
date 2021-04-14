/*==================================================================
1.	Write IIFE that replaces the first and the last element of the given array and prints out its elements. 
	Input array: [4, 5, 11, 9]
	Output array: [ 9, 5, 11, 4]
===================================================================*/

var array = [17, 5, 11, 19, 25, 74];
(function () {

  var newArray = [];
  var firstElement = array[0];
  var lastElement = array[array.length - 1];

  for (var i = 0; i < array.length; i++) {

    if (i === 0) {
      newArray[newArray.length] = lastElement;
    } else if (i === array.length - 1) {
      newArray[newArray.length] = firstElement;
    } else {
      newArray[newArray.length] = array[i];
    }
  }

  console.log(newArray);
})();