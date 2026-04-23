const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { JWT_SECRET } = require("../utils/config");
const { CREATED, ERROR_MESSAGES } = require("../utils/errors");
const {
  BadRequestError,
  UnauthorizedError,
  NotFoundError,
  ConflictError,
} = require("../utils/custom-errors");

const createUser = (req, res, next) => {
  const { name, avatar, email, password } = req.body;

  if (!email || !password) {
    return next(new BadRequestError(ERROR_MESSAGES.INVALID_USER_DATA));
  }

  return bcrypt
    .hash(password, 10)
    .then((hash) =>
      User.create({
        name,
        avatar,
        email,
        password: hash,
      })
    )
    .then((user) =>
      res.status(CREATED).send({
        _id: user._id,
        name: user.name,
        avatar: user.avatar,
        email: user.email,
      })
    )
    .catch((err) => {
      if (err.name === "ValidationError") {
        return next(new BadRequestError(ERROR_MESSAGES.INVALID_USER_DATA));
      }
      if (err.code === 11000) {
        return next(new ConflictError(ERROR_MESSAGES.EMAIL_EXISTS));
      }
      return next(err);
    });
};

const getCurrentUser = (req, res, next) => {
  User.findById(req.user._id)
    .orFail()
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.name === "DocumentNotFoundError") {
        return next(new NotFoundError(ERROR_MESSAGES.USER_NOT_FOUND));
      }
      if (err.name === "CastError") {
        return next(new BadRequestError(ERROR_MESSAGES.INVALID_USER_ID));
      }
      return next(err);
    });
};

const updateProfile = (req, res, next) => {
  const { name, avatar } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { name, avatar },
    { new: true, runValidators: true }
  )
    .orFail()
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.name === "ValidationError") {
        return next(new BadRequestError(ERROR_MESSAGES.INVALID_USER_DATA));
      }
      if (err.name === "DocumentNotFoundError") {
        return next(new NotFoundError(ERROR_MESSAGES.USER_NOT_FOUND));
      }
      if (err.name === "CastError") {
        return next(new BadRequestError(ERROR_MESSAGES.INVALID_USER_ID));
      }
      return next(err);
    });
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new BadRequestError(ERROR_MESSAGES.INVALID_USER_DATA));
  }

  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, JWT_SECRET, {
        expiresIn: "7d",
      });

      return res.send({ token });
    })
    .catch((err) => {
      if (err.message === ERROR_MESSAGES.INVALID_CREDENTIALS) {
        return next(new UnauthorizedError(ERROR_MESSAGES.INVALID_CREDENTIALS));
      }
      return next(err);
    });
};

module.exports = {
  createUser,
  getCurrentUser,
  updateProfile,
  login,
};
