/*==================================================================
9.	 Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.
    "My random string", "_" -> "My_random_string"
    "My random string", "+" -> "My+random+string"
    "My random string" -> "My-random-string"
===================================================================*/

var string = "My random string";
var separator = "_";

function replaceSpaces(string, separator) {
    var result = "";
    switch (separator) {
        case "+":
            for (i = 0; i < string.length; i++) {
                if (string[i] == " ") {
                    result += separator;
                } else {
                    result += string[i];
                }
            }
            break;
        case "_":
            for (i = 0; i < string.length; i++) {
                if (string[i] == " ") {
                    result += separator;
                } else {
                    result += string[i];
                }
            }
            break;
        default:
            for (i = 0; i < string.length; i++) {
                if (string[i] == " ") {
                    result += "-";
                } else {
                    result += string[i];
                }
            }
    }

    return result;
}

console.log(replaceSpaces(string, separator));