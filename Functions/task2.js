/*==================================================================
2.	Write a program that checks if a given number is odd.
===================================================================*/
function givenNumberOdd(a) {
  var string = "";
  if (a % 2 === 0) {
    string += "Number " + a + " is even";
  } else {
    string += "Number " + a + " is odd";
  }

  return string;
}

var result = givenNumberOdd(122);

console.log(result);