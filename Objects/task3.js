/*==================================================================
3.	Write a function that creates an object that represents a project. Each project is described by: description,  programming language, git repository, boolean status that says if the project is in development or not. Add a method that prints out the project's repository,  a method that checks if the project is written in JavaScript as well as a method that checks if the project is in development or not.
==================================================================*/

function project(des, lan, repository, stat, ) {
  var obj = {
    description: des,
    language: lan,
    git: repository,
    status: stat,
    printStatus: function () {
      if (stat) {
        return "In develop";
      }
      return "Finished";
    },
    printRep: function () {
      console.log(repository);
    },
    printWritten: function () {
      if (lan == "JavaScript") {
        return "Using JavaScript";
      }
      return "Do not using JavaScript";
    }

  }
  return obj;
}
var func = project("E-commerce", "JavaScript", "SomeGitHubProfile", true);
console.log(func.printStatus());