/*==================================================================
5.	Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw: 
*****
*    *
*    *
*    *
*****
===================================================================*/
function drawSquare(n) {
  var square = "";
  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      if (i === 0 || i === n - 1) {
        square += "*";
      } else if (j === 0 || j === n - 1) {
        square += "*";
      } else {
        square += " ";
      }
    }
    square += "\n";
  }
  return square;
}

var square1 = drawSquare(8);
console.log(square1);

