/*======================================================================
  7.	Write a program that takes as input a city name and outputs the country where the city is. You may choose which cities and countries you want to    output yourself, however there has to be at least 5 countries and 15 cities. Note that each country must have a different number of cities. Input different from the listed cities should output a message"Please choose a different city".
======================================================================*/
var city = "Belgrade";

//Checking if fields are empty
if (city !== "") {

  //checking type of incoming datas
  if (typeof city === "string") {
    
    switch (city) {
      case "Belgrade":
      case "Novi Sad":
      case "Nis":
      case "Prijepolje":
      case "Krusevac":
        console.log("City " + city + " belong to Serbia");
        break;
      case "New York":
      case "Chicago":
      case "Los angeles":
      case "Washington":
      case "Miami":
        console.log("City " + city + " belong to USA");
        break;
      case "Pariz":
      case "Lyon":
      case "Nice":
      case "Marseille":
      case "Montpeiller":
        console.log("City " + city + " belong to France");
        break;
      case "Madrid":
      case "Barcelona":
      case "Sevilla":
      case "Valencia":
      case "Mallorca":
        console.log("City " + city + " belong to Spain");
        break;
      case "London":
      case "Liverpool":
      case "Glasgow":
      case "Cardiff":
      case "Dublin":
        console.log("City " + city + " belong to United Kingdom");
        break;
      default:
        console.log("Please choose a different city");
    }

  } else {
    console.log("Numbers are not allowed!!");
  }

} else {
  console.log("You have empty fields. All fields are required!!");
}