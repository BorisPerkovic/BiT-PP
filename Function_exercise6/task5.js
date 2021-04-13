/*==================================================================
5.	Write a program that prints a multiplication table for numbers up to 12.
===================================================================*/
var num = 12;

function multiplication(num) {
  var string = "";
  var sum = 0;
  for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= num; j++) {
      sum = i * j;
      string += i + " * " + j + " = " + sum + "\t\t";
    }
    string += "\n";
  }

  return string;
}

var func = multiplication(num);
console.log(func);