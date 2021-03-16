/*==================================================================
5.	Write a program that prints the elements of the following array.
var a = [
  [1, 2, 1, 24], 
  [8, 11, 9, 4], 
  [7, 0, 7, 27]
];
==================================================================*/

var a = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27]
];
var string = "";
for (i = 0; i < a.length; i++) {
  var b = a[i];
  for (j = 0; j < b.length; j++) {
    string += (b[j] + ",");
  }
}
console.log(string);