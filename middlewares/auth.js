const jwt = require("jsonwebtoken");
const { UNAUTHORIZED, ERROR_MESSAGES } = require("../utils/errors");
const { JWT_SECRET } = require("../utils/config");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res
      .status(UNAUTHORIZED)
      .send({ message: ERROR_MESSAGES.AUTH_REQUIRED });
  }

  const token = authorization.replace("Bearer ", "");

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    return next();
  } catch (err) {
    return res
      .status(UNAUTHORIZED)
      .send({ message: ERROR_MESSAGES.AUTH_REQUIRED });
  }
};
