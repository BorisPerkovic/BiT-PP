/*==================================================================
2.	Write a program to sum the multiples of 3 and 5 under 1000.
==================================================================*/

/*
  for (var i = 0; i < 1000; i++) {
    console.log(i * 3 + i * 5);
  }
*/

var sum = 0;
for (var i = 0; i < 1000; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    sum = sum + i;
  }
}
console.log(sum);