/*==================================================================
9.	Write a program that deletes a given element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]
===================================================================*/
var array = [4, 6, 2, 8, 2, 2];
var num = 2;

function deleteElement(array, num) {
  var newArray = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] !== num) {
      newArray[newArray.length] = array[i];
    }
  }

  return newArray;
}

var func = deleteElement(array, num);
console.log(func);