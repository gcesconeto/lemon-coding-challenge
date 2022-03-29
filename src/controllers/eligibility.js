const { OK } = require('http-status-codes').StatusCodes;

const eligibilityService = require('../services/eligibility');

module.exports = async (req, res, next) => {
  try {
    const input = req.body;
    const output = eligibilityService(input);
    res.status(OK).json(output);
  } catch (err) {
    next(err);
  }
};
