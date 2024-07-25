#!/usr/bin/env node

/**
 * Test 6-payment_token.js
 */

const expect = require('chai').expect;
const chai = require('chai');
const sinon = require('sinon');
const getPaymentTokenFromAPI = require('./6-payment_token');

chai.use(require('chai-as-promised'));

describe('getPaymentTokenFromAPI', function (done) {
    it('should respond with { data: "Successful response from the API"} promise payload when success === true', function (done) {
        getPaymentTokenFromAPI(true)
            .then(result => {
                expect(result).to.deep.equal({ data: 'Successful response from the API' });
                done();
            })
            .catch(error => {
                done(error)
            });
    });

    it('should respond with undefined promise payload when success === false', function (done) {
        getPaymentTokenFromAPI(false)
            .then(result => {
                expect(result).to.be.undefined;
                done();
            })
            .catch(error => {
                done(error)
            });
    });
});
