#!/usr/bin/env node

const expect = require('chai').expect;
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function () {
    it('checks that the stub and spy are called with the right arguments', function () {
        const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
        const spy_console = sinon.spy(console, 'log');

        sendPaymentRequestToApi(100, 20);

        expect(stub.calledWith('SUM', 100, 20)).to.be.true;
        expect(stub.calledOnce).to.be.true;

        expect(spy_console.calledWith('The total is: 10')).to.be.true;
        expect(spy_console.calledOnce).to.be.true;

        spy_console.restore();
        stub.restore();
    });
});
