/*==================================================================
  8.	Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]
==================================================================*/
var array1 = [4, 5, 6, 2];
var array2 = [3, 8, 11, 9];
var string = "[";
var string1 = "";
for( i = 0; i < array1.length; i++){

    string +=array1[i] + ",";     //4,5,6,2
    string1 += array2[i] + ",";   //3,8,11,9
  }
  
  string +=string1;   //4,5,6,2 + 3,8,11,9
  string+= "]";

  console.log(string);