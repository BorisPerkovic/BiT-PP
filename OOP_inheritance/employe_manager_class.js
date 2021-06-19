/* Person object */
class Person {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
}

/* Employee extends Person object */
class Employee extends Person {
  constructor(name, lastname, job, salary) {
    super(name, lastname);
    this.name = name;
    this.lastname = lastname;
    this.job = job;
    this.salary = salary;
  }

  getData() {
    return this.name + " " + this.lastname + " " + this.salary;
  };

  getSalary() {
    console.log("Salary: " + this.salary);
  };

  increaseSalary() {
    this.salary = this.salary * 1.1;
    return this.salary;
  };
}

/* Developer extends Employee object */
class Developer extends Employee {
  constructor(name, lastname, job, salary, specilization) {
    super(name, lastname, job, salary);
    this.specilization = specilization;
  }

  getSpecilization() {
    console.log("Specilization: " + this.specilization);
  };
}

/* Manager extends Employee object */
class Manager extends Employee {
  constructor(name, lastname, job, salary, department) {
    super(name, lastname, job, salary);
    this.department = department;
  };

  getDepartment() {
    console.log("Department: " + this.department);
  };

  changeDepartment(newDepartment) {
    this.department = newDepartment;
    console.log("Mangers new Department is: " + this.department);
  };
}

/* creating instances */
var developer = new Developer("Laza", "Lazic", "Coder", 99999, "JavaScript");
var manager = new Manager("Joca", "Kurbla", "Engeneer", 199999, "FrontEnd");
var employee = new Employee("Mile", "Dizna", "Coder", 60000);

/* display pethods and datas */
developer.getSpecilization();
manager.getDepartment();
manager.changeDepartment("Full Stack");

console.log(employee.getData());
employee.getSalary();
console.log(employee.increaseSalary());