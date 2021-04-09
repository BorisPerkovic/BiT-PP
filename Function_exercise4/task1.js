/*==================================================================
1.	Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no
===================================================================*/
var array = [5, -4.2, 18, 7];
var e = 3;

function checkElement(array, e) {
  var result = "";
  for (var i = 0; i< array.length; i++) {
    if(array[i] === e) {
      result = "yes";
      break;
    }
    result = "no";
  }

  return result;
}

var func = checkElement(array, e);
console.log(func)