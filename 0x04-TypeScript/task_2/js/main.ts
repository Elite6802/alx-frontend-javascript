// Interfaces for simple data objects
interface EmployeeData {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

interface DirectorData extends EmployeeData {
  numberOfReports: number;
}

// Interfaces for classes with methods
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Interfaces for other functionality
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

interface StudentConstructorInterface {
  new(firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// String literal type
type Subjects = 'Math' | 'History';

// ---- Data Objects ----
const teacher3: EmployeeData = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

const director1: DirectorData = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

// ---- Function Implementations ----
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName[0]}. ${lastName}`;
};

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

function isDirector(employee: Director | Teacher): employee is Director {
  return 'workDirectorTasks' in employee;
}

function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History';
  }
}

// Example usage to test everything
console.log(teacher3);
console.log(director1);
console.log(printTeacher("John", "Doe"));
const student1: StudentClass = new StudentClass("John", "Doe");
console.log(student1.displayName());
console.log(student1.workOnHomework());
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
console.log(teachClass('Math'));
console.log(teachClass('History'));