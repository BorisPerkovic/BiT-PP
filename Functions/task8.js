/*==================================================================
8.	Write a program that calculates a number of appearances of a given number in a given array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3 
===================================================================*/
function apperances(a, e) {
  var string = "";
  var counter = 0;

  for( i = 0; i < a.length; i++) {
    if( a[i] === e) {
      counter++;
    }
  }
  return string += "Apperance of number " + e + " in array " + a +" is " + counter + " times";
}

var a = [2, 4, 7, 8, 7, 7, 1];
var e = 7;
console.log(apperances(a, e));