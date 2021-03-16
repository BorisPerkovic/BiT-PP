/*==================================================================
7.	Write a program that computes average marks of the following students. Then use this average to determine the corresponding grade. 

David	  80
Marko	  77
Dany	  88
John	  95
Thomas	68

The grades are computed as follows :
< 60%	  F
< 70%	  D
< 80%	  C
< 90%	  B
< 100%	A
==================================================================*/

var students = [
  ['David', 80],
  ['Marko', 50],
  ['Dany', 88],
  ['John', 95],
  ['Thomas', 68]
];

var sum = 0;
for (i = 0; i < students.length; i++) {
  sum += students[i][1];
  //sum = sum + students[i][1];
  var average = (sum / students.length);
}

if (average >= 90 && average < 100) {
  console.log("Average grade is : " + average + " and final mark is A");
} else if (average >= 80 && average < 90) {
  console.log("Average grade is : " + average + " and final mark is B");
} else if (average >= 70 && average < 80) {
  console.log("Average grade is : " + average + " and final mark is C");
} else if (average >= 60 && average < 70) {
  console.log("Average grade is : " + average + " and final mark is D");
} else {
  console.log("Average grade is : " + average + " and final mark is F");
}