const BadRequestError = require("./custom-errors/BadRequestError");
const UnauthorizedError = require("./custom-errors/UnauthorizedError");
const ForbiddenError = require("./custom-errors/ForbiddenError");
const NotFoundError = require("./custom-errors/NotFoundError");
const ConflictError = require("./custom-errors/ConflictError");

module.exports = {
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  ConflictError,
};
