/*==================================================================
  9.	Write a program that deletes a given element e from the array a. 
    Input: e = 2, a = [4, 6, 2, 8, 2, 2]
==================================================================*/
var a = [4, 6, 2, 8, 2, 2];
var e = 2;
var newArray = [];

for ( i = 0; i < a.length; i++) {

  if (a[i] !== e) {
    newArray[newArray.length] = a[i];
  }

}
console.log(newArray);