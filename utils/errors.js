const CREATED = 201;
const BAD_REQUEST = 400;
const UNAUTHORIZED = 401;
const FORBIDDEN = 403;
const NOT_FOUND = 404;
const CONFLICT = 409;
const INTERNAL_SERVER_ERROR = 500;

const ERROR_MESSAGES = {
  SERVER_ERROR: "An error has occurred on the server.",
  AUTH_REQUIRED: "Authorization required.",
  INVALID_CREDENTIALS: "Incorrect email or password.",
  INVALID_USER_DATA: "Invalid user data.",
  INVALID_ITEM_DATA: "Invalid item data.",
  INVALID_USER_ID: "Invalid user ID.",
  INVALID_ITEM_ID: "Invalid item ID.",
  FORBIDDEN_ITEM_DELETE: "You cannot delete another user's item.",
  EMAIL_EXISTS: "A user with this email already exists.",
  USER_NOT_FOUND: "User not found.",
  ITEM_NOT_FOUND: "Item not found.",
  ROUTE_NOT_FOUND: "Requested resource not found.",
};

module.exports = {
  CREATED,
  BAD_REQUEST,
  UNAUTHORIZED,
  FORBIDDEN,
  NOT_FOUND,
  CONFLICT,
  INTERNAL_SERVER_ERROR,
  ERROR_MESSAGES,
};
