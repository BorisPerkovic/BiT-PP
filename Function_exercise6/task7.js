/*==================================================================
7.	Write a function to find the maximum element in array of numbers. Filter out all non-number elements.
===================================================================*/
var array = [NaN, 0, 15, false, -22, '', undefined, 47, null, 75, 63 , 101];

function maxElement(array) {
  var string = "";
  var filteredNumbers = [];
  var max = -Infinity;
  var counter = 0;
  for(var i = 0; i < array.length; i++) {

    var num = parseFloat(array[i]);
    if(isFinite(num)){
      filteredNumbers[filteredNumbers.length] = num;
      if(filteredNumbers[counter] > max){
        max = filteredNumbers[counter];
      }
      counter++;
    }
      
  }
  string += "Filter with only numbers is: " + filteredNumbers + "\n";
  string += "Maximum number from filter is " + max;


  return string;
}

var func = maxElement(array);
console.log(func);