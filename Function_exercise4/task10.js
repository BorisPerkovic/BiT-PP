/*==================================================================
10.	Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]
===================================================================*/
var e = 78;
var p = 3;
var array = [2, -2, 33, 12, 5, 8];


function insertElement(array, p, e) {
  var result = "";
  var newArray = [];
  if (p > array.length) {
    result = "Error message!!";
    return result;
  } else {
    for (i = 0; i < array.length; i++) {
      if (i === p) {
        newArray[newArray.length] = e;
        newArray[newArray.length] = array[i];
      } else {
        newArray[newArray.length] = array[i];
      }
    }    
  }

  return newArray;
}

var func = insertElement(array, p, e)
console.log(func);