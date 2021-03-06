/*====================================================================================================
  Let’s say there are speed limitations on a motorway from 60 to 120 kilometers per hour. If we store the current speed value in the variable speed. Write an expression which will check if we are driving drive safely or not? (true if we are driving safe and false if not) 
=====================================================================================================*/
var lowest = 60;
var highest = 120;
var speed = 80;
console.log(speed > lowest && speed < highest); //return true
console.log(speed < lowest && speed > highest); // return false
