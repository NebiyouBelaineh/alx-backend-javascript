#!/usr/bin/env node
/*
An express app
*/
const express = require('express');
const app = express();
const stream = require('stream');

const database = process.argv[2];
// console.log(typeof database, database);

const countStudents = require('./3-read_file_async');

const port = 1245;

function createConsoleCaptureStream() {
  const captureStream = new stream.Writable();
  let capturedOutput = '';

  // eslint-disable-next-line
  captureStream._write = (chunk, encoding, callback) => {
    capturedOutput += chunk.toString();
    capturedOutput += '\n';
    callback();
  };

  return {
    captureStream,
    getCapturedOutput: () => {
      if (capturedOutput.endsWith('\n')) {
        capturedOutput = capturedOutput.slice(0, -1);
      }
      return capturedOutput;
    },
  };
}

// eslint-disable-next-line
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const { captureStream, getCapturedOutput } = createConsoleCaptureStream();
  const originalConsoleLog = console.log;
  console.log = (...args) => {
    // originalConsoleLog(...args);
    captureStream.write(args.join(''));
  };
  countStudents(database)
    .then(() => {
      // Replace original console.log
      console.log = originalConsoleLog;
      res.write('This is the list of our students\n');
      // console.log(getCapturedOutput());
      res.end(getCapturedOutput());
    })
    .catch((error) => {
      console.log = originalConsoleLog;
      res.end(error.message);
    });
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
