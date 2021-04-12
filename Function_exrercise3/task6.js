/*==================================================================
6.	Write a function to create a specified number of elements with pre-filled numeric value array.
6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" -> ["none", "none"]
2 -> [null, null] 
===================================================================*/
var spec = 6;
var insertElement = 0;

function someArray(spec, insertElement) {
  var def;
  var newArray = [];
  if (insertElement === 0) {
    def = insertElement;
  } else {
    def = insertElement || null;
  }
  for (var i = 0; i < spec; i++) {
    newArray[i] = def;
  }

  return newArray;
}

var func = someArray(spec, insertElement);
console.log(func);