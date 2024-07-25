#!/usr/bin/env node

/**
 * Test 8-api/api.js.
 */
const expect = require('chai').expect;
const exp = require('constants');
// const app = require('./api');
const http = require('http');


describe('api GET /', function () {
    const port = 7865;
    it('should return 200 statuscode, message and content-type', function (done) {
        const request = http.request({
            hostname: 'localhost',
            port: port,
            path: '/',
            method: 'GET',
            headers: { 'Content-Type': 'text/plain' }
        }, function (response) {
            let data = '';

            response.on('data', (chunk) => {
                data += chunk;
            });
            response.on('end', function () {
                expect(response.statusCode).to.equal(200);
                expect(data).to.equal('Welcome to the payment system');
                expect(response.headers['content-type']).to.equal('text/html; charset=utf-8');
                done();
            });
        });
        request.end();
    });
});
