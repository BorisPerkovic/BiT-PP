/*==================================================================
5.	Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2]  
===================================================================*/
var array = [7, 9, 0, -2];
var num = 2;

function arrayElement(array, num) {
  a = num || 1;
  var newArray = [];
  var j = 0;
  for (var i = array.length - a; i < array.length; i++) {
    newArray[j] = array[i];
    j++;
  }
  return newArray;
}
var func = arrayElement(array, num);
console.log(func);