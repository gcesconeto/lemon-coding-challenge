const Ajv = require('ajv');
const rules = require('./rules/rules');
const ValidatorClass = require('./clientValidator');
const { input } = require('./schemas/io');

const clientValidator = new ValidatorClass(rules);

const ajv = new Ajv({ strict: false });
const inputValidator = ajv.compile(input);

function validateClient(data) {
  if (inputValidator(data)) {
    return clientValidator.validate(data);
  }
  return inputValidator.errors;
}

module.exports = validateClient;
