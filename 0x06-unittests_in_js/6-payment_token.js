#!/usr/bin/env node
function getPaymentTokenFromAPI(success) {
    if (success) {
        return Promise.resolve({ data: 'Successful response from the API' });
    }
    // If success is false, return an empty promise
    return Promise.resolve();
}
module.exports = getPaymentTokenFromAPI;
