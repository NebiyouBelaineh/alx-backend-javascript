#!/usr/bin/env node
/*
An express app
*/
const express = require('express');
const app = express();

const countStudents = require('./3-read_file_async');

const port = 12345;

// eslint-disable-next-line
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents('database.csv')
    .then(() => {
      res.send('This is the list of our students\n');
    })
    .catch((error) => {
      res.send(error.message);
    });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
