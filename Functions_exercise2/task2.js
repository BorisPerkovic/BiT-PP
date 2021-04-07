/*==================================================================
2.	Write a function to check whether a string is blank or not.
  "My random string" -> false
  "" -> true
  12 -> false
  false -> false
===================================================================*/

var string = "";

function checkString(string) {

  if (typeof string === "string") {

    if (string == "") {
      return true;
    }
  }
  return false;

}

console.log(checkString(string));