/*==================================================================
2.	Write a function that combines two arrays by alternatingly taking elements.
[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]
===================================================================*/
var array1 = ["a", "b", "c"];
var array2 = [1, 2, 3];

function combArrays(array1, array2) {
  var newArray = [];
  for (i = 0; i < array1.length; i++) {
    newArray[newArray.length] = array1[i];
    newArray[newArray.length] = array2[i];
  }

  return newArray;
}

var func = combArrays(array1, array2);
console.log(func);