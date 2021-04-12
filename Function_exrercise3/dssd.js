

/*7. Write a function that says whether a number is perfect.
28 -> 28 is a perfect number.
Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum
of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known
as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors
(including itself).
E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6.
Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next
perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128. */

var numb = 496;
function perfectNumber (number) {
    var result = "";
    var sum = 0;
    for (var i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    if (number === sum) {
        result += "This number is PERFECT!"
    } else {
        result += "This number is NOT PERFECT!"
    }
    return result;
}

console.log(perfectNumber(numb));





/*8. Write a function to find a word within a string.
"The quick brown fox", "fox" -> "'fox' was found 1 times"
"aa bb cc dd aa", "aa" -> "'aa'" was found 2 times" */

var myString = "The quick brown fox";
var word = "fox";

function wordWithinString (string, word) {
    var result = "";
    var counter = 0;
    var counter2 = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === word[0]) {
            for (var j = i; j < i + word.length; j++) { //j = 16; 16 < 16(i) + word.length(2) => 18; j++
                    if (string[j] === word[j - i]) {
                        counter2++;
                    } if (counter2 === word.length) {
                        counter++;
                    }
            }
            counter2 = 0;
        }
       
    }
    return "'" + word + "'" + " was found " + counter + " times"; 
}

console.log(wordWithinString(myString, word));



//9. Write a function to hide email address.
//"myemailaddress@bgit.rs" -> "mye...@bgit.rs"

var mail = "sndrtasic@gmail.com";

function hideEmail (email) {
    var result = "";
    var mailIndex = 0;
    for (var i = 0; i < email.length; i++) {
        if (i < 3) {
            result += email[i];
        }
    } result += "...";
    for (var j = 0; j < email.length; j++) {
        if (email[j] === "@") {
            mailIndex = j;
        }
    }
    for (var k = mailIndex; k < email.length; k++) {
        result += email[k];
    }
    return result;
}

console.log(hideEmail(mail));


//10. Write a program to find the most frequent item of an array.

var array = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3,];

function mostFrequent (array) {
    var result = "";
    var counter = 0;
    var counterMain = 0;
    var item = "";
    var mainItem = "";
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (array[i] === array[j]) {
                counter++;
                item = array[i];
            }
        } 
        if(counter > counterMain) {
            counterMain = counter; 
            mainItem = item;
        } 
        counter = 0;
    }
    return result += "Most frequent item of this array is '" + mainItem + "' and it appears in total " + counterMain + " times!";
}

console.log(mostFrequent(array));