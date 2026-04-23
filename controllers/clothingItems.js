const ClothingItem = require("../models/clothingitem");
const { CREATED, ERROR_MESSAGES } = require("../utils/errors");
const {
  BadRequestError,
  ForbiddenError,
  NotFoundError,
} = require("../utils/custom-errors");

const getItems = (req, res, next) => {
  ClothingItem.find({})
    .then((items) => res.send(items))
    .catch((err) => next(err));
};

const createItem = (req, res, next) => {
  const { name, weather, imageUrl } = req.body;
  const owner = req.user._id;

  ClothingItem.create({ name, weather, imageUrl, owner })
    .then((item) => res.status(CREATED).send(item))
    .catch((err) => {
      if (err.name === "ValidationError") {
        return next(new BadRequestError(ERROR_MESSAGES.INVALID_ITEM_DATA));
      }
      return next(err);
    });
};

const deleteItem = (req, res, next) => {
  const { id } = req.params;

  ClothingItem.findById(id)
    .orFail()
    .then((item) => {
      if (item.owner.toString() !== req.user._id) {
        return next(new ForbiddenError(ERROR_MESSAGES.FORBIDDEN_ITEM_DELETE));
      }

      return ClothingItem.deleteOne(item).then(() => res.send(item));
    })
    .catch((err) => {
      if (err.name === "DocumentNotFoundError") {
        return next(new NotFoundError(ERROR_MESSAGES.ITEM_NOT_FOUND));
      }
      if (err.name === "CastError") {
        return next(new BadRequestError(ERROR_MESSAGES.INVALID_ITEM_ID));
      }
      return next(err);
    });
};

const likeItem = (req, res, next) => {
  const { id } = req.params;

  ClothingItem.findByIdAndUpdate(
    id,
    { $addToSet: { likes: req.user._id } },
    { new: true }
  )
    .orFail()
    .then((item) => res.send(item))
    .catch((err) => {
      if (err.name === "DocumentNotFoundError") {
        return next(new NotFoundError(ERROR_MESSAGES.ITEM_NOT_FOUND));
      }
      if (err.name === "CastError") {
        return next(new BadRequestError(ERROR_MESSAGES.INVALID_ITEM_ID));
      }
      return next(err);
    });
};

const dislikeItem = (req, res, next) => {
  const { id } = req.params;

  ClothingItem.findByIdAndUpdate(
    id,
    { $pull: { likes: req.user._id } },
    { new: true }
  )
    .orFail()
    .then((item) => res.send(item))
    .catch((err) => {
      if (err.name === "DocumentNotFoundError") {
        return next(new NotFoundError(ERROR_MESSAGES.ITEM_NOT_FOUND));
      }
      if (err.name === "CastError") {
        return next(new BadRequestError(ERROR_MESSAGES.INVALID_ITEM_ID));
      }
      return next(err);
    });
};

module.exports = {
  getItems,
  createItem,
  deleteItem,
  likeItem,
  dislikeItem,
};
