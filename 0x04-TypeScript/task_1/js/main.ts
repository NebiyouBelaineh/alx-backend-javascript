/* eslint-disable */
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [contract: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

const teacher1: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};

const teacher2: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: "Permanent",
    yearsOfExperience: 3,
};

const director1: Directors = {
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

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `-> ${firstName.slice(0, 1)}. ${lastName}`;
};

console.log(printTeacher("Jane", "Doe"));


interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClass;
}
interface SClass {
    firstName: string;
    lastName: string;
    workOnHomeWork(): string;
    displayName(): string;
}
class StudentClass implements SClass {
    constructor(public firstName: string, public lastName: string) {}

    workOnHomeWork(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

const newStudent = new StudentClass('John', 'Doe');
console.log(newStudent.displayName());
