/*==================================================================
5.	Write a program that calculates a number of float values in the array.
	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
  Output: 2
===================================================================*/
var array = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];


function integerNumber(array) {
  var counter = 0;
  for (i = 0; i < array.length; i++) {
    var floatNumber = parseInt(array[i]);
    if (isFinite(floatNumber) && parseFloat(array[i]) !== floatNumber){
      counter++;
    } 
      

  }
  return counter;
}
console.log(integerNumber(array));