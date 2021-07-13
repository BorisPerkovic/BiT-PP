/* Airport exercise using Object Oriented Programming and ES6 */

"use strict";

(function () {

  /* constructor function for Person */
  function Person(name, lastname) {
    this.personName = name;
    this.personLastname = lastname;
    this.getData = function () {
      this.data = `${this.personName} ${this.personLastname}`;
      return this.data;
    };
  };

  /* constructor function for Seat */
  function Seat(number, category) {
    this.seatNumber = number;
    this.seatCategory = category;
    this.getData = function () {
      this.data = `${this.seatNumber}, ${this.seatCategory}`;
      return this.data;
    };
  };

  /* constructor function for Passenger */
  function Passenger(person, seat) {
    this.passengerNameLastname = person.getData();
    this.passengerSeat = seat.getData();
    this.getData = function () {
      this.data = `${this.passengerSeat}, ${this.passengerNameLastname}`;
      return this.data;
    };
  };

  /* constructor function for Flight */
  function Flight(relation, date) {
    this.flightRelation = relation;
    this.flightDate = date;
    this.passengerList = [];
    this.addPassenger = function (passenger) {
      this.passengerList.push(passenger);
    };
    this.getData = function () {
      let string = `${this.flightDate}, ${this.flightRelation }\n`;
      this.passengerList.forEach( function (num)  {
        string += `     ${num.passengerSeat}, ${num.passengerNameLastname}\n`;
      });
      return string;
    };
  };

  /* constructor function for Airport */
  function Airport(name) {
    this.airportName = name;
    this.airportListOfFlights = [];
    this.addFlight = function (flight) {
      this.airportListOfFlights.push(flight);
    };
  };

  /* function for creating flight Object */
  function createFlight(relation, date) {

    let vowels = ["a", "e", "i", "o", "u"];
    let removeVowels = relation.split('').filter(element => !vowels.includes(element) && !" ".includes(element)).join('');
    let getingWords = removeVowels.split("-");
    let fromDestination = getingWords[0][0].toUpperCase() + getingWords[0][getingWords[0].length - 1].toUpperCase();
    let arivalDestination = getingWords[1][0].toUpperCase() + getingWords[1][getingWords[1].length - 1].toUpperCase();
    let fullDestination = fromDestination + " - " + arivalDestination;

    let flightDate = new Date(date).toLocaleDateString("en-GB");
    let dateSplit = flightDate.split("/");
    dateSplit = dateSplit[1] + "." + dateSplit[0] + "." + dateSplit[2];

    const flight = new Flight(fullDestination, dateSplit);
    return flight;
  };

  /* function for creating passenger Object */
  function createPassenger(firstName, lastName, seat, cat) {

    let seatNumber = seat == "" ? Math.floor(Math.random() * 100) + 1 : seat;
    let category = cat == "" ? "economy" : "business";

    const person = new Person(firstName, lastName);
    const passengerSeat = new Seat(seatNumber, category);
    const passenger = new Passenger(person, passengerSeat);
    return passenger;
  };

  /* creating airport Object */
  const airport = new Airport("Nikola Tesla");

  /* creating flights */
  const flight1 = createFlight("Belgrade - New York", "Oct 25 2017");
  const flight2 = createFlight("Barcelona - Belgrade", "Nov 11 2017");

  /* creating passengers */
  const person1 = createPassenger("John", "Snow", 1, "b");
  const person2 = createPassenger("Cersei", "Lannister", 2, "");
  const person3 = createPassenger("Daenerys", "Targaryen", 14, "");
  const person4 = createPassenger("Tyrion", "Lannister", "", "b");

  /* adding passengers to flights */
  flight1.addPassenger(person1);
  flight1.addPassenger(person2);
  flight2.addPassenger(person3);
  flight2.addPassenger(person4);

  /* adding flights to airport */
  airport.addFlight(flight1);
  airport.addFlight(flight2);

  /* sum of all passengers at airport */
  var sumOFPassengers = 0;
  airport.airportListOfFlights.forEach(function (num) {
    sumOFPassengers += num.passengerList.length;
  });

  /* print datas on display */
  console.log(`Airport: ${airport.airportName}, total passengers: ${sumOFPassengers}`);
  airport.airportListOfFlights.forEach(function (num) {
    console.log(`   ${num.getData()}`);
  });
})();