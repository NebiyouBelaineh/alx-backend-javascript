#!/usr/bin/env node

function calculateNumber(type, a, b) {
    switch (type) {
        case 'SUM':
            return Math.round(a) + Math.round(b); 
        case 'SUBTRACT':
            return Math.round(a) - Math.round(b);
        case 'DIVIDE':
            if (b === 0) {
                return 'ERROR';
            }
            return Math.round(a) / Math.round(b);
        default:
            return;
    }
}
export default calculateNumber;
// module.exports = calculateNumber;
