const Ajv = require('ajv');
const { UNPROCESSABLE_ENTITY } = require('http-status-codes').StatusCodes;

const { inputSchema } = require('../schemas/io');

const ajv = new Ajv({ strict: false });
const validateForm = ajv.compile(inputSchema);

module.exports = (req, _res, next) => {
  const input = req.body;

  if (!validateForm(input)) {
    const err = {
      status: UNPROCESSABLE_ENTITY,
      message: [],
    };
    validateForm.errors.forEach((error) => {
      err.message.push(
        {
          error: error.message,
          params: error.params,
        },
      );
    });
    return next(err);
  }
  return next();
};
