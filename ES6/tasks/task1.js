/*============================================================
1.	tasksWrite a function that capitalizes the first letter of each string argument it receives.  
	Function arguments: ['hello', 'there', 'ES', 6]
	Output: ['Hello', 'There', 'ES']

============================================================== */

const capitalize = (...arg) => {
  return arg
  .filter(element => typeof element === "string")
  .map(element => element[0].toUpperCase() + element.slice(1));
}

console.log(capitalize("hello", "there", "ES", 6));