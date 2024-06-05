var student1 = {
    firstName: "Jack",
    lastName: "Harlow",
    age: 20,
    location: "Los Angles",
};
var student2 = {
    firstName: "Kevin",
    lastName: "Hart",
    age: 20,
    location: "Philadelphia",
};
var studentList = [student1, student2];
function renderTable(students) {
    var tableBody = document.querySelector("#studentsTable tbody");
    for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
        var student = students_1[_i];
        var row = document.createElement('tr');
        var firstNameCell = document.createElement('td');
        var locationCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;
        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        tableBody === null || tableBody === void 0 ? void 0 : tableBody.appendChild(row);
    }
}
document.addEventListener('DOMContentLoaded', function () {
    renderTable(studentList);
});
