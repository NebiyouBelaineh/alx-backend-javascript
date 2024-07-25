#!/usr/bin/env node

/**
 * Test 0-calcul.js
 */

import assert from 'assert';
import calculateNumber from './0-calcul.js';

describe('calculateNumber', function () {
    it('should return a number', function () {
        assert(typeof calculateNumber(1.2, 2) === 'number');
    });
    it('should return 3', function () {
        assert.strictEqual(calculateNumber(1, 2), 3);
    });
    it('should return 5', function () {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });
    it('should return 6', function () {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
});
