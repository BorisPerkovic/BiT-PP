/*=============================================================================================
  Write a JavaScript program to check if the number is divisible by 2. If it is, print even, if not, print odd.
  Sample Input: 3			Sample Input: 4			 Sample Input: 9
  Output : odd				Output : even			Output : odd
=============================================================================================*/
var a = 4, b = 9, c = 3;
var message = "";
if (a % 2 === 0) {
  message += "Number " + a + " is even\n";
} else {
  message += "Number " + a + " is odd\n";
}
if (b % 2 === 0) {
  message += "Number " + b + " is even\n";
} else {
  message += "Number " + b + " is odd\n";
}
if (c % 2 === 0) {
  message += "Number " + c + " is even\n";
} else {
  message += "Number " + c + " is odd\n";
}
console.log(message);