interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const student1: Student = {
    firstName: "Jack",
    lastName: "Harlow",
    age: 20,
    location: "Los Angles",
};
const student2: Student = {
    firstName: "Kevin",
    lastName: "Hart",
    age: 20,
    location: "Philadelphia",
};

const studentList: Student[] = [student1, student2];

function renderTable(students: Student[]): void {
    const tableBody = document.querySelector("#studentsTable tbody");

    for (const student of students) {
        const row = document.createElement('tr');

        const firstNameCell = document.createElement('td');
        const locationCell = document.createElement('td');

        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;

        row.appendChild(firstNameCell);
        row.appendChild(locationCell);

        tableBody?.appendChild(row);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    renderTable(studentList);
});
