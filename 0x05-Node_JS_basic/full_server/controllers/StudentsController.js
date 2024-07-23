#!/usr/bin/env node
/*
Student controller module
*/
import readDatabase from '../utils';

const database = process.argv.length > 2 ? process.argv[2] : 'database.csv';

class StudentConroller {
  static getAllStudents(req, res) {
    readDatabase(database)
      .then((data) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the list of our students\n');
        let isFirst = true;

        for (const field in data) {
          if (Object.prototype.hasOwnProperty.call(data, field)) {
            if (isFirst) {
              res.write(`Number of students in ${field}: ${data[field].length}. List: ${data[field].sort().join(', ')}\n`);
              isFirst = false; // Update the flag to false after the first iteration
            } else {
              res.write(`Number of students in ${field}: ${data[field].length}. List: ${data[field].sort().join(', ')}`);
            }
          }
        }

        res.end();
      }).catch((error) => {
        // console.log(database);
        res.status(500).send(error.message);
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    // console.log(major);
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major must be CS or SWE');
      return;
    }
    readDatabase(database)
      .then((data) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        // console.log(`List: ${data[major].sort().join(', ')}`);
        res.write(`List: ${data[major].sort().join(', ')}`);
        res.end();
      }).catch((error) => {
        res.status(500).send(error.message);
      });
  }
}

export default StudentConroller;
module.exports = StudentConroller;
