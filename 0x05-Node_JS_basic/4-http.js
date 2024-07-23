#!/usr/bin/env node
/*
create a small HTTP server using the http module
*/

const http = require('http');
const port = 12345;
// eslint-disable-next-line
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});

app.listen(port, () => {
  // console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
