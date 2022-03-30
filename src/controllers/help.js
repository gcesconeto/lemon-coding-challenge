const { OK } = require('http-status-codes').StatusCodes;

module.exports = async (req, res, next) => {
  try {
    res.status(OK).send('Plese refer to https://github.com/gcesconeto/lemon-coding-challenge before using API.');
  } catch (err) {
    next(err);
  }
};
