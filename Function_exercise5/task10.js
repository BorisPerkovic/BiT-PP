/*==================================================================
10.	Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
Input:  17    | 15
Output: true  | false
===================================================================*/
var num = 15;

function prime(num) {
  var string = "";
  if (num > 1) {
    if (num !== 2) {
      for (i = 2; i < num; i++) {
        if (num % i === 0) {
          string = "Number is not prime";
          break;
        } else {
          string = "Number is prime";
        }
      }
    } else {
      string = "Number is prime";
    }
  } else {
    string = "Number is lower than 2. Please type number greather than 1";
  }
  return string;
}
console.log(prime(num));