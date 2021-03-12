/*======================================================================
  3.	Write a program that for a 1-7 number input (representing a day in a week) shows if that day is a weekday or weekend. All other cases output a    message explaining that input must be a number between 1 and 7.
		For input 2, output should be “It’s weekday”.
    For input 6, output should be “It’s weekend”.
    For input 12, output should be “Input must be number between 1 and 7”.
======================================================================*/
var dayNumber = 6;


//Checking if fields are empty
if (dayNumber !== "") {

  //checking type of incoming datas
  if (typeof dayNumber === "number") {

    switch (dayNumber) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        console.log("It’s weekday");
        break;
      case 6:
      case 7:
        console.log("It’s weekend");
        break;
      default:
        console.log("It must be number between 1 to 7");
    }

  } else {
    console.log("Only number is allowed!!");
  }

} else {
console.log("You have empty fields. All fields are required!!");
}