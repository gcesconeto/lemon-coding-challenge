const rules = require('./checkEligibility/rules');
const CheckEligibility = require('./checkEligibility');

const checkEligibility = new CheckEligibility(rules);

module.exports = (input) => checkEligibility.check(input);
