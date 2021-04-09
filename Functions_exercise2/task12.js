/*==================================================================
12. Write a function to calculate how many years there are left until retirement based on the year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed.
===================================================================*/
var usersYear = 1970;
var usersSex = "female";

function retirementYears(usersYear, usersSex) {
  var result = "";
  var maleRetirement = 65;
  var femaleRetirement = 60;
  var currentYear = 2021;

  if (usersSex == "male") {
    if (currentYear - usersYear < 64) {
      result = "You have " + (maleRetirement - (currentYear - usersYear)) + " years left until retirement";
    } else {
      result = "Sorry sir, You are already retired";
    }
  } else {
    if (currentYear - usersYear < 60) {
      result = "You have " + (femaleRetirement - (currentYear - usersYear)) + " years left until retirement";
    } else {
      result = "Sorry madam, You are already retired";
    }
  }

  return result;
}

var func = retirementYears(usersYear, usersSex);
console.log(func);