/*==================================================================
3.	Write a function that concatenates a given string n times (default is 1).
	"Ha" -> "Ha"
"Ha", 3 -> "HaHaHa"
===================================================================*/
function conc(a, b) {
  var string = "";

  if ( isFinite(b) && b !== false ) {
    for (i = 0; i < b; i++) {
      string += a;
    }
  } else {
    string += a;
  }


  return string;
}

var a = "Ha";
var b = 3;

console.log(conc(a, b));