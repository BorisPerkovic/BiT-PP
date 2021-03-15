/*======================================================================
  8.	Write a program that takes as input two numbers and a string denoting the operation (“+”, “-”, “*”, “/”) and prints out the appropriate result.   Watch out for division by zero!
======================================================================*/
var a = 10;
var b = 10;
var operation = "/";

//Checking if fields are empty
if (a !== "" && b !== "" && operation !== "0") {

  //checking type of incoming datas
  if (typeof a === "number" && typeof b === "number") {

    console.log("a = " + a + "\n");
    console.log("b = " + b + "\n");
    console.log("Operation is " + operation + "\n");

    switch (operation) {
      case "+":
        console.log("Result is " + (a + b));
        break;
      case "-":
        console.log("Result is " + (a - b));
        break;
      case "*":
        console.log("Result is " + (a * b));
        break;
      case "/":
        if (a !== 0 && b !== 0) {
          console.log("Result is " + (a / b));
        } else {
          console.log("Number a or number b is zero. It is not possible division by zero!!");
        }
        break;
      default:
        console.log("Unknown operation!!");
    }

  } else {
    console.log("Only numbers are allowed!!");
  }
  
} else {
  console.log("You have empty fields. All fields are required!!");
}