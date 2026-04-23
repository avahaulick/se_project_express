const { INTERNAL_SERVER_ERROR, ERROR_MESSAGES } = require("../utils/errors");

module.exports = (err, req, res, next) => {
  console.error(err);

  const statusCode = err.statusCode || INTERNAL_SERVER_ERROR;
  const message =
    statusCode === INTERNAL_SERVER_ERROR
      ? ERROR_MESSAGES.SERVER_ERROR
      : err.message;

  res.status(statusCode).send({ message });
};
