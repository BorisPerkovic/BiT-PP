class App {
  constructor(name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;
  }

  isCCLicence() {
    return this.licence.toUpperCase() == "CC" ? true : false;
  }

  like() {
    return ++this.stars;
  };

  showStars() {
    console.log("Number of stars: " + this.stars);
  };
};

class WebApp extends App {
  constructor(name, licence, stars, url, technologies) {
    super(name, licence, stars);
    this.url = url;
    this.technologies = technologies;
  };

  getData() {
    console.log("Application name: " + this.name + "\n" + "Applicaton url: " + this.url + "\n" + "Technologies: " + this.technologies + "\n" + "Licence: " + this.licence + "\n" + "Stars: " + this.stars);
  };

  reactBased() {
    return this.technologies.toLowerCase() == "react" ? true : false;
  };
}

class MobileApp extends App {
  constructor(name, licence, stars, platforms) {
    super(name, licence, stars);
    this.platforms = platforms;
  };

  getData() {
    console.log("Name: " + this.name + "\n" + "Platform: " + this.platforms + "\n" + "Licence: " + this.licence + "\n" + "Stars: " + this.stars);
  };

  forandorid() {
    return this.technologies.toLowerCase() == "adnorid" ? true : false;
  };
};

var webApp = new WebApp("Uber", "EE", 27, "someube.com", "React");

if(webApp.isCCLicence()) {
  console.log("Ima licencu");
} else {
  console.log("Nema licencu");
}