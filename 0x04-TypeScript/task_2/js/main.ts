// Define the DirectorInterface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Define the TeacherInterface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Implement the Director class
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

// Implement the Teacher class
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

// Create the createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

/**
// Type guard for Director
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}
*/

// Type guard for Teacher
function isTeacher(employee: Director | Teacher): employee is Teacher {
  return (employee as Teacher).workTeacherTasks !== undefined;
}

/*
// Execute the work based on the employee type
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}
*/
function isDirector(employee: Director | Teacher): employee is Director {
  return 'workDirectorTasks' in employee;
}

// Function to execute work based on employee type
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}


// Example Usage:
console.log(createEmployee(200)); // Should return Teacher instance
console.log(createEmployee(1000)); // Should return Director instance
console.log(createEmployee('$500')); // Should return Director instance

console.log(executeWork(createEmployee(200))); // Expected output: Getting to work
console.log(executeWork(createEmployee(1000))); // Expected output: Getting to director tasks

console.log(executeWork(createEmployee(200)));
// Getting to work
console.log(executeWork(createEmployee(1000)));