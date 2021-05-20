/*==================================================================
  4.	Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
  ○	Add a method that prints out all the ingredients necessary for the meal preparation. 
  ○	Add a method that checks if a meal can be prepared for 15 minutes. 
  ○	Add a method that changes the type of cuisine to the given value. 
  ○	Add a method that delete a given ingredient from the list of ingredients.  
==================================================================*/

function Recipe(name, cuis, complexity, ingr, time, instructions) {

    this.name = name;
    this.cuisine = cuis;
    this.complexity = complexity;
    this.ingredients = ingr;
    this.time = time;
    this.instructions = instructions,
    this.ingred = function () {
      return ingr.toString();
    };
    this.preparation = function () {
      if (this.time < 15) {
        return "Less than 15 minutes";
      }
      return "More than 15 minutes";
    };
    this.typeCuisine = function (cuis) {
      this.cuisine = cuis;
    };
    this.deleteIngredient = function (value) {
      this.ingredients = this.ingredients.filter(function (ingr) {
        return ingr !== value;
      });
    }
}

var pizza = new Recipe("Pizza", "Italy", 2, ["Olives", "Cheese", "Ham", "Mushrooms"], 10, "Create pastry for Pizza, put ingredienst on it, make 250 degrees and wait for 10 miuntes");

var spagheti = new Recipe("Spagheti", "France", 1, ["Beef", "Cheese", "Ham", "Pastry"], 25, "Create pastry for Pizza, put ingredienst on it, make 250 degrees and wait for 10 miuntes");

console.log(pizza);
pizza.deleteIngredient("Ham");
console.log(pizza);
