const validation = require('./validation');

const validateClient = (input) => {
  let output = { elegivel: true };
  output = validation.billing(input);
  output = validation.class(input);
  output = validation.co2(input);
  output = validation.consumption(input);
  return output;
};

module.exports = validateClient;
