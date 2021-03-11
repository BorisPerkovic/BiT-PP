/*======================================================================
  6.	Write a program that for a string input of a grade from “A”-“F” outputs a proper info message about that grade in the following manner: A - "Good job"", B - "Pretty good"", C - "Passed"", D - "Not so good"", F - "Failed". Input different from letters A-F outputs a message "Unknown grade".
======================================================================*/
var grade = "A";

if (typeof grade === "string") {
  switch (grade) {
    case "A":
      console.log("Your done some Good Job");
      break;
    case "B":
      console.log("You done some Pretty good job");
      break;
    case "C":
      console.log("Your Passed");
      break;
    case "D":
      console.log("Your job is not so good");
      break;
    case "F":
      console.log("You have Failed");
      break;
    default:
      console.log("Your input is Unknown Grade");
  }
} else {
  console.log("Numbers are not allowed!!");
}