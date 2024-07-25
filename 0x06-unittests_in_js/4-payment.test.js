#!/usr/bin/env node

const expect = require('chai').expect;
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
    beforeEach(function () {
        // Create a spy and stub
        stub = sinon.stub(Utils, 'calculateNumber').returns(10);
        spy_console = sinon.spy(console, 'log');
    });

    afterEach(function () {
        // Restore the stub and spy
        spy_console.restore();
        stub.restore();
    });

    it('should return 120', function () {
        // const spy = sinon.spy(Utils, 'calculateNumber');
        // Call sendPaymentRequestToApi with 'SUM', 100 and 20 as arguments
        // console.log(typeof sendPaymentRequestToApi)
        sendPaymentRequestToApi(100, 20);
        // Assert that calculateNumber was called with 'SUM' and 100 and 20
        // expect(spy.calledWith('SUM', 100, 20)).to.be.true;
        expect(stub.calledWith('SUM', 100, 20)).to.be.true;
        expect(spy_console.calledWith('The total is: 10')).to.be.true;
        
    });
});
