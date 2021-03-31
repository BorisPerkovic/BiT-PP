/*==================================================================
6.	Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * *
===================================================================*/
/*  PRIMER 1

 function horizontalChart(a, b, c) {
  var result = '';
  for (var i = 0; i < a; i++) {
      result += '* '; 
  }
  result += '\n';
  for (var j = 0; j < b; j++) {
      result += '* '; 
  }
  result += '\n';
  for (var x = 0; x < c; x++) {
      result += '* '; 
  }
  return result;
}
console.log(horizontalChart(5, 3, 7));

*/

// PRIMER 2

function chart() {
    var result = "";
    var numOfArg = arguments.length;
    for (var i = 0; i < numOfArg; i++) {
        for (var j = 0; j < arguments[i]; j++) {
            result += '*'; 
        }
        result += "\n";
    }
    return result;
}
console.log(chart(5, 3, 7));