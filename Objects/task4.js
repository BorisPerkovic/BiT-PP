/*==================================================================
  4.	Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
  ○	Add a method that prints out all the ingredients necessary for the meal preparation. 
  ○	Add a method that checks if a meal can be prepared for 15 minutes. 
  ○	Add a method that changes the type of cuisine to the given value. 
  ○	Add a method that delete a given ingredient from the list of ingredients.  
==================================================================*/

function culinaryRecipe(name, cuis, complexity, ingr, time, instructions) {
  var obj = {
    name: name,
    cuisine: cuis,
    complexity: complexity,
    ingredients: ingr,
    time: time,
    instructions: instructions,
    ingred: function () {
      return ingr.toString();
    },
    preparation: function () {
      if (time < 15) {
        return "Less than 15 minutes";
      }
      return "More than 15 minutes";
    },
    typeCuisine: function (cuis) {
      obj.cuisine = cuis;
      return obj.cuisine;
    },
    deleteIngredient: function (value) {
      var value = value;
      return obj.ingredients.filter(function (ingr) {
        return ingr !== value;
      });
    }


  }
  return obj;
}
var func = culinaryRecipe("Pizza", "Italy", 2, ["Olives", "Cheese", "Ham", "Mushrooms"], 10, "Create pastry for Pizza, put ingredienst on it, make 250 degrees and wait for 10 miuntes");
console.log(func);