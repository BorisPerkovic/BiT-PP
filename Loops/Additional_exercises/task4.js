/*==================================================================
4.	Write a program that finds the first element larger than minimum and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2
===================================================================*/
var arr = [4, 2, 2, -1, 6];
var  min = Infinity;
var nextMin = Infinity;

for (var i = 0; i < arr.length; i++) {
	if (min > arr[i]) {
		nextMin = min;
		min = arr[i];
	} else if (nextMin > arr[i]) {
		nextMin  = arr[i];
	}
}
console.log(min, nextMin);
