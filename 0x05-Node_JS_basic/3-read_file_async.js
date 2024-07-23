#!/usr/bin/env node
/*
countStudents function reads database.csv file synchronously
and logs the number of students and number of students in fields(CS, SWE)
*/
const fs = require('fs');
const path = require('path');

function countStudents(databasePath) {
  const filePath = path.join(__dirname, databasePath);
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const students = data.split('\n');
        if (students[students.length - 1] === '') {
          students.pop(); // removes empty line
        }
        students.shift(); // removes first line titles
        console.log(`Number of students: ${students.length}`);
        const studyFields = {
          CS: {
            list: [],
          },
          SWE: {
            list: [],
          },
        };
        for (const student of students) {
          // capture first name and field of study
          const fName = student.split(',')[0];
          const field = student.split(',')[3];
          // console.log(field, lname, age);
          studyFields[field].list.push(fName);
        }
        for (const field in studyFields) {
          if (Object.prototype.hasOwnProperty.call(studyFields, field)) {
            console.log(`Number of students in ${field}: ${studyFields[field].list.length}. List: ${studyFields[field].list.join(', ')}`);
          }
        }
        resolve();
      }
    });
  });
}
module.exports = countStudents;
