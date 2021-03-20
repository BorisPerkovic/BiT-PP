/*==================================================================
4.	Write a program that finds the first element larger than minimum and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2
===================================================================*/
var array = [3, 11, -5, -3, 2];
var sum = 0;

for(var i = 0; i< array.length; i++) {
  
    if(array[i] > 0) {
        sum += array[i];
    }
}
console.log(sum);
