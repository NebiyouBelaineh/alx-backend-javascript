#!/usr/bin/env node

/**
 * Test 8-api/api.js.
 */
const expect = require('chai').expect;
const exp = require('constants');
const request = require('request');


describe('api GET /', function () {
    const port = 7865;
    it('should return 200 statuscode, message and content-type', function (done) {
        request({
            url: `http://localhost:${port}/`,
            method: 'GET',
            headers: { 'Content-Type': 'text/plain' }
        }, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Welcome to the payment system');
            expect(response.headers['content-type']).to.equal('text/html; charset=utf-8');
            done();
        });
    });
    it('should return 404 statuscode for invalid route', function (done) {
        request({
            url: `http://localhost:${port}/invalid`,
            method: 'GET',
            headers: { 'Content-Type': 'text/plain' }
        }, function (error, response, body) {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });
    it('GET /cart/:id returns correct response for valid :id', (done) => {
        request.get(`http://localhost:${port}/cart/23`, (_err, res, body) => {
          expect(res.statusCode).to.be.equal(200);
          expect(body).to.be.equal('Payment methods for cart 23');
          done();
        });
      });
    
      it('GET /cart/:id returns 404 response for negative number values in :id', (done) => {
        request.get(`http://localhost:${port}/cart/-23`, (_err, res, _body) => {
          expect(res.statusCode).to.be.equal(404);
          done();
        });
      });
    
      it('GET /cart/:id returns 404 response for non-numeric values in :id', (done) => {
        request.get(`http://localhost:${port}/cart/alkd21dlasd`, (_err, res, _body) => {
          expect(res.statusCode).to.be.equal(404);
          done();
        });
      });
});
