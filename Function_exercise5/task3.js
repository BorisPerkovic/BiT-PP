/*==================================================================
3.	Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display students' names with their corresponding grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input: 
[ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
Output: 
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam
===================================================================*/
var students = ["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"];
var grades = [50, 39, 63, 72, 99, 51, 83, 59];

function examResults(students, grades) {
  var result = "";
  for (i = 0; i < students.length; i++) {
    
    if (grades[i] >= 91 && grades[i] < 100) {
      result += students[i] + " acquired " + grades[i] + " points and earned 10.\n";
    } else if (grades[i] >= 81 && grades[i] < 91) {
      result += students[i] + " acquired " + grades[i]+ " points and earned 9.\n";
    } else if (grades[i] >= 71 && grades[i] < 81) {
      result += students[i] + " acquired " + grades[i] + " points and earned 8.\n";
    } else if (grades[i] >= 61 && grades[i] < 71) {
      result += students[i] + " acquired " + grades[i] + " points and earned 7.\n";
    } else if (grades[i] >= 51 && grades[i] < 61) {
      result += students[i] + " acquired " + grades[i] + " points and earned 6.\n";
    } else {
      result += students[i] + " acquired " + grades[i] + " and failed to complete the exam.\n";
    }
  }

  return result;
}

var func = examResults(students, grades);
console.log(func);