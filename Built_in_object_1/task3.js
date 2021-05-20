/*==================================================================
a.	Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true

b.	Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4

==================================================================*/

var array = [1, 2, 9, 2, 1];

function oddElements (array) {
  if(array.length % 2 !== 0) {
    return true;
  }
  return false;
}

function middleElements (array) {
  var output;
  if(array.length % 2 === 0) {
    return "Array has even number od elements!!";
  } else {
    output =  array.length / 2 + 0.5;
    return output;
  }
  
}

/* 
var someArr = [1, 2, 9, 2, 1];
function isOddArr(array) {
  if (array.push() % 2 !== 0) return true;
  return false;
}
var arr = isOddArr(someArr);
console.log(arr);
*/

console.log(oddElements(array));
console.log(middleElements(array));