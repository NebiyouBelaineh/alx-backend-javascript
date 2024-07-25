#!/usr/bin/env node

/**
 * Test 1-calcul.js
 */

const assert = require('assert');
const calculateNumber = require('./1-calcul');
// const calculateNumber = require('./1-calcul');

describe('calculateNumber from 1-calcul', function () {
    it('sum of 1.2 and 2 should return a number', function () {
        assert(typeof calculateNumber('SUM', 1.2, 2) === 'number');
    });
    it('difference of 1.2 and 2 should return a number', function () {
        assert(typeof calculateNumber('SUBTRACT', 2, 1.2) === 'number');
    });
    it('quotient of 1.2 and 2 should return a number', function () {
        assert(typeof calculateNumber('DIVIDE', 2, 1.2) === 'number');
    });
    it('should return 3', function () {
        assert.strictEqual(calculateNumber('SUM', 1, 2), 3);
    });
    it('should return 3', function () {
        assert.strictEqual(calculateNumber('SUBTRACT',3.7, 1.2), 3);
    });
    // Test with Divide with none 0 number
    it('should return 6', function () {
        assert.strictEqual(calculateNumber('DIVIDE', 3.7, 1.5), 2);
    });
    // Test with Divide by 0
    it('should return ERROR', function () {
        assert.strictEqual(calculateNumber('DIVIDE', 3.7, 0), 'ERROR');
    });
    // Test with no type argument
    it('should return undefined', function () {
        assert.strictEqual(calculateNumber('', 3.7, 1.5), undefined);
    });
    // Test with unsupported type argument
    it('should return undefined', function () {
        assert.strictEqual(calculateNumber('REMAINDER', 3.7, 1.5), undefined);
    });
});
