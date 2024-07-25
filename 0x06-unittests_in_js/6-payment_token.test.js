#!/usr/bin/env node

/**
 * Test 6-payment_token.js
 */

const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function (done) {
    it('should respond with { data: "Successful response from the API"} promise payload when success === true', function (done) {
        getPaymentTokenFromAPI(true)
            .then(result => {
                expect(result).to.deep.equal({data: 'Successful response from the API'});
                done();
            })
        });
});
