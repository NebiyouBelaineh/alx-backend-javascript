#!/usr/bin/env node
import express from 'express';
import appRoute from './routes/index';

const app = express();

const port = 1245;

appRoute(app);

app.listen(port, () => {
  // console.log(`Server running at http://localhost:${port}/`);
});

export default app;
module.exports = app;
