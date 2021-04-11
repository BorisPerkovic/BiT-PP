/*==================================================================
6.	Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 and displayed in console.
Output: 2350000
===================================================================*/
var a = 1000;
var b = 500;

function evenOdd(a, b){
  var sumEven = 0;
  var sumOdd = 0;
  for(even = 1, odd = 1; even <= a, odd <= b; even++, odd ++) {
    if(even % 2 === 0){
      sumEven += even;
    }

    if(odd % 2 !== 0) {
      sumOdd += odd; 
    }
  }

  return sumEven;
}

var func = evenOdd(a, b);
console.log(func);