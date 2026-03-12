const ClothingItem = require("../models/clothingitem");
const {
  BAD_REQUEST,
  NOT_FOUND,
  INTERNAL_SERVER_ERROR,
  ERROR_MESSAGES,
} = require("../utils/errors");

const getItems = (req, res) => {
  ClothingItem.find({})
    .then((items) => res.send(items))
    .catch(() =>
      res
        .status(INTERNAL_SERVER_ERROR)
        .send({ message: ERROR_MESSAGES.SERVER_ERROR })
    );
};

const createItem = (req, res) => {
  const { name, weather, imageUrl } = req.body;
  const owner = req.user._id;

  ClothingItem.create({ name, weather, imageUrl, owner })
    .then((item) => res.status(201).send(item))
    .catch((err) => {
      if (err.name === "ValidationError") {
        return res
          .status(BAD_REQUEST)
          .send({ message: ERROR_MESSAGES.INVALID_ITEM_DATA });
      }
      return res
        .status(INTERNAL_SERVER_ERROR)
        .send({ message: ERROR_MESSAGES.SERVER_ERROR });
    });
};

const deleteItem = (req, res) => {
  const { id } = req.params;

  ClothingItem.findById(id)
    .orFail()
    .then((item) => ClothingItem.deleteOne(item).then(() => res.send(item)))
    .catch((err) => {
      if (err.name === "DocumentNotFoundError") {
        return res
          .status(NOT_FOUND)
          .send({ message: ERROR_MESSAGES.ITEM_NOT_FOUND });
      }
      if (err.name === "CastError") {
        return res
          .status(BAD_REQUEST)
          .send({ message: ERROR_MESSAGES.INVALID_ITEM_ID });
      }
      return res
        .status(INTERNAL_SERVER_ERROR)
        .send({ message: ERROR_MESSAGES.SERVER_ERROR });
    });
};

const likeItem = (req, res) => {
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
        return res
          .status(NOT_FOUND)
          .send({ message: ERROR_MESSAGES.ITEM_NOT_FOUND });
      }
      if (err.name === "CastError") {
        return res
          .status(BAD_REQUEST)
          .send({ message: ERROR_MESSAGES.INVALID_ITEM_ID });
      }
      return res
        .status(INTERNAL_SERVER_ERROR)
        .send({ message: ERROR_MESSAGES.SERVER_ERROR });
    });
};

const dislikeItem = (req, res) => {
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
        return res
          .status(NOT_FOUND)
          .send({ message: ERROR_MESSAGES.ITEM_NOT_FOUND });
      }
      if (err.name === "CastError") {
        return res
          .status(BAD_REQUEST)
          .send({ message: ERROR_MESSAGES.INVALID_ITEM_ID });
      }
      return res
        .status(INTERNAL_SERVER_ERROR)
        .send({ message: ERROR_MESSAGES.SERVER_ERROR });
    });
};

module.exports = {
  getItems,
  createItem,
  deleteItem,
  likeItem,
  dislikeItem,
};
