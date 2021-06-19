function App(name, licence, stars) {
  this.name = name;
  this.licence = licence;
  this.stars = stars
}

App.prototype.isCCLicence = function () {
  return this.licence.toUperCase() == "CC" ? true : false;
};
App.prototype.like = function () {
  return ++this.stars;
};
App.prototype.showStars = function () {
  console.log("Number of stars: " + this.stars);
};

function WebApp(name, url, technologies, licence, stars) {
  App.call(this, name, licence, stars);
  this.url = url;
  this.technologies = technologies;
}
WebApp.prototype = Object.create(App.prototype);
WebApp.prototype.constructor = WebApp;

WebApp.prototype.getData = function () {
  console.log("Application name: " + this.name + "\n" + "Applicaton url: " + this.url + "\n" + "Technologies: " + this.technologies + "\n" + "Licence: " + this.licence + "\n" + "Stars: " + this.stars);
};
WebApp.prototype.reactBased = function () {
  return this.technologies.toLowerCase() == "react" ? true : false;
};

function MobileApp(name, platforms, licence, stars) {
  App.call(this, name, licence, stars);
  this.platforms = platforms;
}
MobileApp.prototype = Object.create(App.prototype);
MobileApp.prototype.constructor = MobileApp;


MobileApp.prototype.getData = function () {
  console.log("Name: " + this.name + "\n" + "Platform: " + this.platforms + "\n" + "Licence: " + this.licence + "\n" + "Stars: " + this.stars);
};
MobileApp.prototype.forandorid = function () {
  return this.technologies.toLowerCase() == "adnorid" ? true : false;
};

var webApp = new WebApp("Uber", "someube.com", "React", "CC", "27");
webApp.like();
webApp.like();
webApp.like();
webApp.showStars();