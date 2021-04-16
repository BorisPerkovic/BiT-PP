/*==================================================================
15.	Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
*********
* Hello *
* World *
* in    *
* a     *
* frame *
===================================================================*/
var array = ["Hello", "World", "in", "a", "frame"];

function frame(array) {
  var limiter = 0;
  var frame = "";
  var inFrame = "";
  var string = "";

  for (var i = 0; i < array.length; i++) {
    if (array[i].length > limiter) {
      limiter = array[i].length;
    }
    inFrame += "* " + array[i] + " *" + "\n";
  }
  for (var j = 0; j < limiter + 4; j++) {
    frame += "*";
  }
  string = frame + "\n" + inFrame + frame;
  return string;
}

var func = frame(array);
console.log(func);