const Ajv = require('ajv');
const rules = require('./checkEligibility/rules');
const CheckEligibility = require('./checkEligibility');
const { input } = require('./validateFormat/schemas/io');

const checkEligibility = new CheckEligibility(rules);

const ajv = new Ajv({ strict: false });
const validateFormat = ajv.compile(input);

function validateClient(data) {
  if (validateFormat(data)) {
    return checkEligibility.check(data);
  }
  return validateFormat.errors;
}

module.exports = validateClient;
