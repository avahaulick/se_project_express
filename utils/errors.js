const BAD_REQUEST = 400;
const NOT_FOUND = 404;
const INTERNAL_SERVER_ERROR = 500;

const ERROR_MESSAGES = {
  SERVER_ERROR: "An error has occurred on the server.",
  INVALID_USER_DATA: "Invalid user data.",
  INVALID_ITEM_DATA: "Invalid item data.",
  INVALID_USER_ID: "Invalid user ID.",
  INVALID_ITEM_ID: "Invalid item ID.",
  USER_NOT_FOUND: "User not found.",
  ITEM_NOT_FOUND: "Item not found.",
  ROUTE_NOT_FOUND: "Requested resource not found.",
};

module.exports = {
  BAD_REQUEST,
  NOT_FOUND,
  INTERNAL_SERVER_ERROR,
  ERROR_MESSAGES,
};
