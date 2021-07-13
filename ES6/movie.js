/* Movie festival exercise using Object Oriented Programming and ES6 */

(function () {

  /* constructor function for Genre */
  function Genre(name) {
    this.genreName = name;
    this.getData = function () {
      return `${this.genreName[0].toUpperCase()}${this.genreName[this.genreName.length - 1].toUpperCase()}`;
    };
  };

  /* constructor function for Movie */
  function Movie(title, length, genre) {
    this.movieTitle = title;
    this.movieGenre = genre;
    this.movieLength = length;
    this.getData = function () {
      return `${this.movieTitle} , ${this.movieLength} min, ${this.movieGenre}`;
    };
  };

  /* constructor function for Program */
  function Program(date, numberMovies) {
    this.programDate = date;
    this.movieList = [];
    this.programMovieNUmbers = numberMovies;
    this.addMovie = function (movie) {
      this.movieList.push(movie);
    };
    this.getData = function () {
      let string = "";
      let sum = 0;
      for (let i = 0; i < this.movieList.length; i++) {
        sum += this.movieList[i].movieLength;
      }
      string += `${this.programDate}, program duration ${sum} min\r`;
      for (let i = 0; i < this.movieList.length; i++) {
        string += `    ${this.movieList[i].getData()}  \r`;
      }
      return string;
    };
  };

  /* constructor function for Festival */
  function Festival(name, numMovies) {
    this.festivalName = name;
    this.numMovies = numMovies;
    this.lisOfPrograms = [];
    this.addProgram = function (program) {
      this.lisOfPrograms.push(program);
    };
    this.getData = function () {
      let string = "";
      let sum = 0;
      for (let i = 0; i < this.lisOfPrograms.length; i++) {
        sum += this.lisOfPrograms[i].movieList.length;
      }
      string += "Weekend festival has " + sum + " movie titles\r";
      for (let i = 0; i < this.lisOfPrograms.length; i++) {
        string += `  ${this.lisOfPrograms[i].getData()}\r`;
      }
      return string;
    };
  };

  /* function for create Movie and Genre Objects */
  function createMovie(title, length, gen) {
    const genre = new Genre(gen);
    const movie = new Movie(title, length, genre.getData());
    return movie;
  };

  /* function for create Program */
  function createProgram(date) {
    const program = new Program(date);
    return program;
  };

  /* creating Festival object */
  const festival = new Festival("BeFest", 25);

  /* creating  programs */
  const program1 = createProgram("20.10.2017");
  const program2 = createProgram("21.10.2017");

  /* creating movies */
  const movie1 = createMovie("Kill bill", 130, "action");
  const movie2 = createMovie("Reservior Dogs", 200, "drama");
  const movie3 = createMovie("Amerian Pie", 120, "comedy");
  const movie4 = createMovie("Forest Gamp", 120, "triler");

  /* adding movies to programs */
  program1.addMovie(movie1);
  program1.addMovie(movie2);
  program1.addMovie(movie3);
  program2.addMovie(movie4);

  /* adding programs to festival */
  festival.addProgram(program1);
  festival.addProgram(program2);

  /* display informations */
  console.log(festival.getData());
})();