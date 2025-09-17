// Implement the Director class
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
// Implement the Teacher class
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
// Create the createEmployee function
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}
// Type guard for Director
function isDirector(employee) {
    return employee.workDirectorTasks !== undefined;
}
// Type guard for Teacher
function isTeacher(employee) {
    return employee.workTeacherTasks !== undefined;
}
// Execute the work based on the employee type
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    else {
        return employee.workTeacherTasks();
    }
}
// Example Usage:
console.log(createEmployee(200)); // Should return Teacher instance
console.log(createEmployee(1000)); // Should return Director instance
console.log(createEmployee('$500')); // Should return Director instance
console.log(executeWork(createEmployee(200))); // Expected output: Getting to work
console.log(executeWork(createEmployee(1000))); // Expected output: Getting to director tasks
