/*======================================================================
  1.	Write a program that shows text representation of a day in a week for a number input from 1 to 7. Print output in console. 
  For input 1, output should be “Monday”.
======================================================================*/

var dayNumber = 2;

//Checking if fields are empty
if (dayNumber !== "") {

  //Checking type of incoming datas
  if (typeof dayNumber === "number") {

    switch (dayNumber) {
      case 1:
        console.log("Your favorite day of week is Monday");
        break;
      case 2:
        console.log("Your favorite day of week is Tuesday");
        break;
      case 3:
        console.log("Your favorite day of week is Wednesday");
        break;
      case 4:
        console.log("Your favorite day of week is Thursday");
        break;
      case 5:
        console.log("Your favorite day of week is Friday");
        break;
      case 6:
        console.log("Your favorite day of week is Saturday");
        break;
      case 7:
        console.log("Your favorite day of week is Sunday");
        break;
    }

  } else {
    console.log("Only number is allowed!!");
  }

} else {
  console.log("You have empty fields. All fields are required!!");
}