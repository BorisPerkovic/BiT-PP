/*==================================================================
6.	Write a function that checks if a given string is valid password. The password is valid if it is at least 6 characters long and contains at least one digit. The function should receive two callbacks named successCallback and errorCallback that should be called in case password is correct or invalid. 
Input: JSGuru 
Output: Your password is invalid!
	Input: JSGuru123
	Output: Your password is cool! 
===================================================================*/
var string = "JSGuru123";

var password = function (string) {
  var result;
  var counter = 0;
  if (string.length > 6) {
    for (var i = 0; i < string.length; i++) {
      var resultNumbers = parseInt(string[i]);
      if (isFinite(resultNumbers)) {
        counter++;
      }
    }

    if (counter === 0) {
      result = "Password must have at least one number. Your password is invalid!";
    } else {
      result = "Your password is cool!";
    }
  } else {
    result = "Password must be at least 6 charasters long.";
  }

  return result;
}

console.log(password(string));