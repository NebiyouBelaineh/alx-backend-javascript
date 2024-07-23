#!/usr/bin/env node
/*
An express app
*/
const express = require('express');
const app = express();

const port = 12345;

// eslint-disable-next-line
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
