/*==================================================================
4.	Write a program which prints the elements of the following array as a single string.
var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
==================================================================*/

var x = ["1", "A", "B", "c", "r", true, NaN, undefined];
var string = "";
for (i in x) {
  string += x[i];
}
console.log("String of all elements in array x is: " + string);