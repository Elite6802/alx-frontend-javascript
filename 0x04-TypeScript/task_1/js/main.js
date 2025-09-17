var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName[0], ". ").concat(lastName);
};
// Example usage:
console.log(printTeacher("John", "Doe")); // Outputs: J. Doe
console.log(printTeacher("Jane", "Smith")); // Outputs: J. Smith
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
// Example usage to verify functionality:
var student1 = new StudentClass("John", "Doe");
console.log(student1.displayName()); // Should print "John"
console.log(student1.workOnHomework()); // Should print "Currently working"
