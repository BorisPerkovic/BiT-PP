/*==================================================================
1.	Why pay a fortune teller when you can just program your fortune yourself?
Write a function named tellFortune that:
●	takes 4 arguments: number of children, partner's name, geographic location, job title.
●	outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.
===================================================================*/

function tellFortune(children, location, partner, job) {
  var children = children;
  var location = location;
  var partner = partner;
  var job = job;
  var string = "";

  string = "You will be a " + job + " in " + location + " and married to " + partner + " with " + children + " kids.";
  return string;
}

console.log(tellFortune("2", "Russia", "Vasilij", "Doctor"));
console.log(tellFortune("1", "Spain", "Enrique", "Tourist Guide"));
console.log(tellFortune("3", 'USA', 'Julia', "Tech Leader"));