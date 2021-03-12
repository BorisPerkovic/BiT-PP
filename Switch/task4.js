/*======================================================================
  4.	Write a program that for a 1-12 number input (representing a month in a year) shows that month’s name. All other cases output a message explaining that input must be a number between 1 and 12. 
		For input 2, output should be “February”.
    For input 6, output should be “June”.
    For input 13, output should be “Input must be a number between 1 and 12”.	
======================================================================*/
var monthNumber = 5;

//Checking if fields are empty
if (monthNumber !== "") {

  //checking type of incoming datas
  if (typeof monthNumber === "number") {

    switch (monthNumber) {
      case 1:
        console.log("Your favorite month is January");
        break;
      case 2:
        console.log("Your favorite month is February");
        break;
      case 3:
        console.log("Your favorite month  is March");
        break;
      case 4:
        console.log("Your favorite month  is April");
        break;
      case 5:
        console.log("Your favorite month  is May");
        break;
      case 6:
        console.log("Your favorite month  is June");
        break;
      case 7:
        console.log("Your favorite month is July");
        break;
      case 8:
        console.log("Your favorite month is August");
        break;
      case 9:
        console.log("Your favorite month is September");
        break;
      case 10:
        console.log("Your favorite month is October");
        break;
      case 11:
        console.log("Your favorite mont is November");
        break;
      case 12:
        console.log("Your favorite month is December");
        break;
      default:
        console.log("It must be number between 1 to 12");
    }

  } else {
    console.log("Only number is allowed!!");
  }

} else {
  console.log("You have empty fields. All fields are required!!");
}