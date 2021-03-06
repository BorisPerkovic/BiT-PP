/*=============================================================================================
  Write a conditional statement to print three numbers as sorted number list.
  Sample numbers : 0, -1, 4 
  Output : 4, 0, -1 
=============================================================================================*/
var a = 0;
var b = 4;
var c = -1;
if (a > b && a > b) {
  if (b > c) {
    console.log("Desceding array is: " + a + ", " + b + ", " + c);
  }
}
if (a > b && a > c) {
  if (c > b) {
    console.log("Desceding array is: " + a + ", " + c + ", " + b);
  }
}
if (b > a && b > c) {
  if (a > c) {
    console.log("Desceding array is: " + b + ", " + a + ", " + c);
  }
}
if (b > a && b > c) {
  if (c > a) {
    console.log("Desceding array is: " + b + ", " + c + ", " + a);
  }
}
if (c > a && c > b) {
  if (a > b) {
    console.log("Desceding array is: " + c + ", " + a + ", " + b);
  }
}
if (c > a && c > b) {
  if (b > a)
    console.log("Desceding array is: " + c + ", " + b + ", " + a);
}