#!/usr/bin/env node

/**
 * Test 2-calcul_chai.js
 */

import { expect } from 'chai';
import calculateNumber from './2-calcul_chai.js';

describe('calculateNumber from 1-calcul', function () {
    it('sum of 1.2 and 2 should return a number', function () {
        expect(calculateNumber('SUM', 1.2, 2)).to.be.a('number');
    });
    it('difference of 1.2 and 2 should return a number', function () {
        expect(calculateNumber('SUBTRACT', 2, 1.2)).to.be.a('number');
    });
    it('quotient of 1.2 and 2 should return a number', function () {
        expect(calculateNumber('DIVIDE', 2, 1.2)).to.be.a('number');
    });
    it('should return 3', function () {
        expect(calculateNumber('SUM', 1, 2)).to.equal(3);
    });
    it('should return 3', function () {
        expect(calculateNumber('SUBTRACT',3.7, 1.2)).to.equal(3);
    });
    // Test with Divide with none 0 number
    it('should return 6', function () {
        expect(calculateNumber('DIVIDE', 3.7, 1.5)).to.equal(2);
    });
    // Test with Divide by 0
    it('should return ERROR', function () {
        expect(calculateNumber('DIVIDE', 3.7, 0)).to.equal('ERROR');
    });
    // Test with no type argument
    it('should return undefined', function () {
        expect(calculateNumber('', 3.7, 1.5)).to.equal(undefined);
    });
    // Test with unsupported type argument
    it('should return undefined', function () {
        expect(calculateNumber('REMAINDER', 3.7, 1.5)).to.equal(undefined);
    });
});
