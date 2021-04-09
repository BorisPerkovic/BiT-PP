/*==================================================================
8.	Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]
===================================================================*/
var array1 = [4, 5, 6, 2];
var array2 = [3, 8, 11, 9];

function concatenate(array1, array2) {
  for (i = 0; i < array2.length; i++) {
    array1[array1.length] = array2[i];
  }
  return array1;
}

var func = concatenate(array1, array2);
console.log(func);