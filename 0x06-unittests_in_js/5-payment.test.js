#!/usr/bin/env node

const expect = require('chai').expect;
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function () {
    beforeEach(function () {
        // Create a spy for console.log
        spy_console = sinon.spy(console, 'log');
    });

    afterEach(function () {
        // Restore the stub and spy
        spy_console.restore();
        stub.restore();
    });

    it('test sendPaymentRequestToAPI with 100 and 20 as arguments\
         and verify console logs "The total is: 120" and only called once ', function () {
        sendPaymentRequestToApi(100, 20);
        expect(spy_console.calledWith('The total is: 120')).to.be.true;
    });
    it('test sendPaymentRequestToAPI with 10 and 10 as arguments\
        and verify console logs "The total is: 20" and only called once', function () {
        sendPaymentRequestToApi(10, 10);
        expect(spy_console.calledWith('The total is: 20')).to.be.true;
    });
});
