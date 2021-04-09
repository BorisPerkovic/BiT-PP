/* 
funkcjie 3 zadataci  
*/

var insertStringPos = function (string, addString, posNumber) {
  posNumber = posNumber || 1;
  if(posNumber === 1) {
    return addString + string; 
  }
  var result = "";
  for ( i = 0; i < string.length; i++) {
    if ( i === posNumber) {
      result += addString;
    }
    result += string[i];
  }
  return result;
}

var result = insertStringPos("My random string", "JS ", 10);
console.log(result);

/* 
pre definisane  zadataci  
*/