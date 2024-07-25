#!/usr/bin/env node

/**
 * express app
 */

const express = require('express');
const app = express();

const port = 7865;

app.get('/', (req, res) => {
    res.status(200);
    res.send('Welcome to the payment system');
});

app.listen(port, ()=> {
    console.log('API available on localhost port 7865');
});

// module.exports = app;