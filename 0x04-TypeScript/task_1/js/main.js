var teacher1 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
var teacher2 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: "Permanent",
    yearsOfExperience: 3,
};
var director1 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: "Permanent",
    yearsOfExperience: 3,
    numberOfReports: 3,
};
console.log(teacher1);
console.log(teacher2);
console.log(director1);
var printTeacher = function (firstName, lastName) {
    return "-> ".concat(firstName.slice(0, 1), ". ").concat(lastName);
};
console.log(printTeacher("Jane", "Doe"));
