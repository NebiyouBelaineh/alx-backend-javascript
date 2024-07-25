#!/usr/bin/env node

const expect = require('chai').expect;
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

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

    it('checks that the stub and spy are called with the right arguments', function () {
        sendPaymentRequestToApi(100, 20);

        expect(stub.calledWith('SUM', 100, 20)).to.be.true;
        expect(spy_console.calledWith('The total is: 10')).to.be.true;
    });
});
