#!/usr/bin/env node
/*
create an HTTP server using the http module and handles routes '/'
and '/students'
*/

const http = require('http');
const stream = require('stream');
const database = process.argv.length > 2 ? process.argv[2] : '';

const port = 1245;
const countStudents = require('./3-read_file_async');

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
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  const { captureStream, getCapturedOutput } = createConsoleCaptureStream();
  const originalConsoleLog = console.log;
  console.log = (...args) => {
    // originalConsoleLog(...args);
    captureStream.write(args.join(''));
  };

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
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
  }
});

app.listen(port, () => {
  // console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
