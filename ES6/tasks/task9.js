/*============================================================
9
a.	Create an array of persons. A person should be an object with name and age properties. Experiment with enhanced object literals. 
b.	Write a function that prints out the names of persons older than 25. 
c.	Write a function that check if there is a person older than 40.
d.	Write a function that checks if all persons are older than 20.   
============================================================== */

const persons = [
  {
    name: "John",
    age: 25,
  },
  {
    name: "Deneryis",
    age: 37,
  },
  {
    name: "Tyirion",
    age: 41,
  },
  {
    name: "Ajra",
    age: 18,
  },
  {
    name: "Bolton",
    age: 48,
  },

];

const personsNames = (obj) => {
  return obj
  .filter((element) => element.age > 25)
  .map(element => element.name);
}

const olderThan= (obj) => {
  return obj.some((element) => element.age > 40);
}

const allPersons= (obj) => {
  return obj.every((element) => element.age > 20);
}

console.log(`Persons older than 25 years: ${personsNames(persons)}`);
console.log(`Is there a person/s older than 40 years: ${olderThan(persons)}`);
console.log(`Is all persons older than 20 years: ${allPersons(persons)}`);