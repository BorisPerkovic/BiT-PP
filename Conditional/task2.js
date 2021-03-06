/*=============================================================================================
  Write a conditional statement to find the largest of five numbers. Display the result in the console.
  Sample numbers: -5, -2, -6, 0, -1 
  Output: 0  
=============================================================================================*/

/* RESENJE BROJ 1
 var a = -5;
 var b = 15;
 var c = -6;
 var d = 0;
 var e = -1;
 if (a > b && a > c && a > d && a > e) {
   console.log("Largest number is: " + a);
 } else if (b > c && b > d && b > e) {
   console.log("Largest number is: " + b);
 } else if (c > d && c > e) {
   console.log("Largest number is: " + c);
  } else if (d > e) {
   console.log("Largest number is: " + d);
 } else {
   console.log("Largest number is: " + e);
 }
*/ 
  //RESENJE BROJ 2
  //METODA LAZNE PREDPOSTAVKE UVODJENJEM VARIJABLE MAX 
  var a = -5;
  var b = 1;
  var c = 6;
  var d = 3;
  var e = -35;
  var max = a;
  if(b > max){
    max = b;
  }
  if(c > max){
    max = c;
  }
  if(d > max){
    max = d;
  }
  if(e > max){
    max = e;
  }
  console.log(max);