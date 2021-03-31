/*==================================================================
1.	Write a program that calculates the maximum of two given numbers. 
===================================================================*/
function maxOfTwoNumbers(a, b) {
  var string = "";
  if (a > b) {
    string += "Max od two given number is: " + a;
  } else if (a == b) {
     string += "Number  " + a + " is equal with " + b;
  } else {
    string += "Max od two given number is: " + b;
  }

  return string;
}

var result = maxOfTwoNumbers(16, 18);
console.log(result);