/*==================================================================
6.	Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.

Input array: [3, 4, 12, 8]
	Output: The array isn’t symmetric.
================================================================== */

var p = 0;
var array = [2, 4, -2, 7, -2, 4, 2];

for(i = 0; i < array.length/2; i++){
    if(array[i] !== array[array.length-1-i]){
        p = 1;
    }
}
if(p === 0){
    console.log("The array is symmetric");
} else{
    console.log("The array isn’t symmetric");
}

