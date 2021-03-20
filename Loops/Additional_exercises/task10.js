/*==================================================================
  10.	Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]
==================================================================*/
var e = 78;
var p = 3;
var a = [2, -2, 33, 12, 5, 8];
var string = "[";

if (p > a.length) {
  console.log("Error message!!");
} else {

  for (i = 0; i < a.length; i++) {
    if (i === p) {
      string += e + ",";
    } else {
      string += a[i] + ",";
    }
  }
  string += "]";
  console.log(string);
}