/*====================================================================================================
  If the variable age stores the information about user’s age, how we can check whether it contains a correct value? Write expressions for checking:
  -Is age negative value
  -Is age greater than 120 
=====================================================================================================*/
var age = 31;
var isInRange = age > 0 && age < 120;
console.log(isInRange);