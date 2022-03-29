const rules = require('./checkEligibility/rules');
const CheckEligibility = require('./checkEligibility/CheckEligibility');

const checkEligibility = new CheckEligibility(rules);

module.exports = (input) => checkEligibility.check(input);
