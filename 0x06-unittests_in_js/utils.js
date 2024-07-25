#!/usr/bin/env node

module.exports= Utils = {
    calculateNumber: function(type, a, b) {
        switch (type) {
            case 'SUM':
                return Math.round(a) + Math.round(b); 
            case 'SUBTRACT':
                return Math.round(a) - Math.round(b);
            case 'DIVIDE':
                if (Math.round(b) === 0) {
                    return 'ERROR';
                }
                return Math.round(a) / Math.round(b);
            default:
                return;
        }
    },
}

// module.export = Utils;
