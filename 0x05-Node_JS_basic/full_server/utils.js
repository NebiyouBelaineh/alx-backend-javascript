#!/usr/bin/env node
/*
This file contains utility functions
*/
const fs = require('fs');

function countStudents(databasePath) {
  // const filePath = path.join(__dirname, databasePath);
  // console.log(filePath);
  return new Promise((resolve, reject) => {
    fs.readFile(databasePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const students = data.split('\n');
        if (students[students.length - 1] === '') {
          students.pop(); // removes empty line
        }
        students.shift(); // removes first line titles
        const studyFields = {
          CS: [],
          SWE: [],
        };
        for (const student of students) {
          // capture first name and field of study
          const fName = student.split(',')[0];
          const field = student.split(',')[3];
          // console.log(field, lname, age);
          studyFields[field].push(fName);
        }
        resolve(studyFields);
      }
    });
  });
}

function readDatabase(database) {
  return new Promise((resolve, reject) => {
    countStudents(database)
      .then((data) => {
        resolve(data);
      }).catch((err) => {
        reject(err);
      });
  });
}

module.exports = readDatabase;
export default readDatabase;
