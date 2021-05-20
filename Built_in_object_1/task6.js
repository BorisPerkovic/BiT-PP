/*==================================================================
a.	Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example,
	[
{name: ‘apples’, price: 100}, 
{name: ‘milk’, price: 80}, 
{name:’bananas’, price: 150}
]
b.	Write a function that calculates the total price of your shopping list. 
c.	Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals. 
d.	Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase. 

==================================================================*/

/* a task */
var productLists = [
  {name: "apples", price: 100}, 
  {name: "milk", price: 80}, 
  {name: "bananas", price: 150}
]

/* b task */
function getTotalPrice (params) {
  var sum = 0;

  for(var i in params) {
    sum += params[i].price;
  }

  return sum;
};

/* c task */
function getAveragePrice (params) {
  var sum = 0;

  for(var i in params) {
    sum += params[i].price;
  }

  return sum / params.length;
};

/* d task */
function getMostExpensive (params) {

  var expensive = params[0].price; 

  for(var i in params) {
    if(params[i].price > expensive) {
      expensive = params[i].price;
    }
  }

  return expensive;
};

console.log("Total price: " , getTotalPrice(productLists));
console.log("Average price: ", getAveragePrice(productLists));
console.log("Most expensive product: ", getMostExpensive(productLists));

