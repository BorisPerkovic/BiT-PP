/*======================================================================
  5.	Write a program that for a 1-12 number input (representing a month in a year) shows what season it is. All inputs different from 1-12 output a message explaining that input must be a number between 1 and 12. 
======================================================================*/
var monthNumber = 6;

if (typeof monthNumber === "number") {
  switch (monthNumber) {
    case 12:
      console.log("First half of December is Autumn, second half of December is Winter");
      break;
    case 1:
    case 2:
      console.log("Your favorite seasson is winter");
      break;
    case 3:
      console.log("First half of March is Winter, second half of March is Spring");
      break;
    case 4:
    case 5:
      console.log("Your favorite seasson is Spring");
      break;
    case 6:
      console.log("First half of June is Spring, second half of June is Summer");
      break;
    case 7:
    case 8:
      console.log("Your favorite seasson is Summer");
      break;
    case 9:
      console.log("First half of September is Summer, second half of September is Autumn");
      break;
    case 10:
    case 11:
      console.log("Your favorite seasson is Autumn");
      break;
    default:
      console.log("It must be number between 1 to 12");
  }
} else {
  console.log("Only number is allowed!!");
}