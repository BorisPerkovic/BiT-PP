/*==================================================================
2.	Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]
===================================================================*/
var array = [3, 500, -10, 149, 53, 414, 1, 19];

function dividing(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] / 2 + 5 === 0) {
      array[i] = 20;
      newArray[i] = array[i];
    } else {
      newArray[i] = array[i] / 2 + 5;
    }
  }

  return newArray;
}

var func = dividing(array);
console.log(func);