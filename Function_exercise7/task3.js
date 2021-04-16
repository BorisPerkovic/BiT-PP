/*==================================================================
3.	Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
Write a function named calculateSupply that:
●	takes 2 arguments: age, amount per day.
●	calculates the amount consumed for rest of the life (based on a constant max age).
●	outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.
===================================================================*/

function calculateSupply (age, amount) {
  var result = "";
  var maxAge = 75;
  var yearlyAmmount = 365 * amount;

  result = yearlyAmmount * (maxAge - age);
  return "You will need " + result + " candies to last you until the ripe old age of " + maxAge;
}
console.log(calculateSupply(15, 2));
console.log(calculateSupply(11, 1));
console.log(calculateSupply(9, 4));