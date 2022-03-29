const Ajv = require('ajv');
const { UNPROCESSABLE_ENTITY } = require('http-status-codes').StatusCodes;

const { inputSchema } = require('../schemas/io');

const ajv = new Ajv({ strict: false });
const validateForm = ajv.compile(inputSchema);

module.exports = (req, res, next) => {
  const input = req.body;

  if (!validateForm(input)) {
    const err = {
      status: UNPROCESSABLE_ENTITY,
      message: {
        error: validateForm.errors[0].message,
        params: validateForm.errors[0].params,
      },
    };
    return next(err);
  }
  return next();
};
