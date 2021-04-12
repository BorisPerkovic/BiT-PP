/*==================================================================
10.	Write a program to find the most frequent item of an array.
[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
===================================================================*/
var array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mf = 1;
var m = 0;
var item;

function frequent(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = i; j < array.length; j++) {
      if (array[i] == array[j]) {
        m++;
      }
      if (mf < m) {
        mf = m;
        item = array[i];
      }
    }
    m = 0;
  }
  return "The most frquent item is " + item;
}

var func = frequent(array);
console.log(func);