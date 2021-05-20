/*==================================================================
a.	Write a function that finds all the elements in a given array less than a given element. 
	Input: [2, 3, 8, -2, 11, 4], 6 
	Output: [2, 3, -2, 4]

b.	Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive. 
		Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
	Output: [’Programming’, ‘product’]

c.	Write a function that expects an array and a callback function that filters out some of the elements. Use functions defined in a) or b) to test it. 
==================================================================*/

var array = [2, 3, 8, -2, 11, 4];
var value = 6;
var bArray = ["JavaScript", "Programming", "fun", "product"];
var string = "pro";
var arrayC = ["kaskader", "kaSkadno", "programer", "jezik"];

/* a task */
function given (array, value) {
  var output = array.filter(function(number) {
    return number < value;
  });

  return output;
};

/* b task */
function findStringElement (array, string) {
  var output = [];
  var modArray = array.slice();

  modArray = modArray.map(function (value) {
    return value.toUpperCase();
  });
  for(var i = 0; i < array.length; i++) {
    if(modArray[i].slice(0, string.length) == string.toUpperCase()) {
      output.push(array[i]);
    }
  }

  return output;
};

/* c task */
function filterC (array, value, f) {
  return f(array, value);
}

var outputC = filterC(arrayC, "kas", findStringElement);
var outputCtwo = filterC(array, 4, given);

/* pritn all tasks */
console.log(given(array, value));
console.log(findStringElement(bArray, string));
console.log(outputC);
console.log(outputCtwo);
