/*==================================================================
4.	It's hot out! Let's make a converter based on the steps here.
Create a function called celsiusToFahrenheit:
●	Store a celsius temperature into a variable.
●	Convert it to fahrenheit and output "NN°C is NN°F".

Create a function called fahrenheitToCelsius:
●	Now store a fahrenheit temperature into a variable.
●	Convert it to celsius and output "NN°F is NN°C."
===================================================================*/
var celsius = 25;
var fahrenhiet = 70;

function celsiusToFahrenheit(celsius) {
  var fahre = (celsius * 9) / 5 + 32;
  var result = "";
  result = celsius + "°C" + " is " + fahre + "°F.";

  return result;
}


function fahrenheitToCelsius(fahrenheit) {
  var cels = ((fahrenheit - 32) * 5) / 9;
  var result = "";
  result = fahrenheit + "°F" + " is " + cels + "°C.";

  return result;
}

console.log(celsiusToFahrenheit(celsius));
console.log(fahrenheitToCelsius(fahrenhiet));