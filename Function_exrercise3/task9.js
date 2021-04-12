/*==================================================================
9.	Write a function to hide email address.
"myemailaddress@bgit.rs" -> "mye...@bgit.rs"
10.	Write a program to find the most frequent item of an array.
===================================================================*/
var email = "myemailaddress@bgit.rs";

function hideEmail(email) {
  var result = "";
  var n = 0;
  for (var i = 0; i < email.length; i++) {
    if (i < 3) {
      result += email[i];
    }
    if (i === 4) {
      result += "...";
    }
    if (email[i] == "@") {
      for (var j = i; j < email.length; j++) {
        result += email[j];
      }
    }
  }

  return result;
}

var func = hideEmail(email);
console.log(func);