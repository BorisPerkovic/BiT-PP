/*==================================================================
1.	Write a function to check whether the `input` is a string or not.
  "My random string" -> true
  12 -> false
===================================================================*/
var string = "My random string";

function checkString(string) {

  if (typeof string === "string") {
    return true;
  } 
  return false;
  
}

console.log(checkString(string));