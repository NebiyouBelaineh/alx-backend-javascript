interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    contract: any;
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
