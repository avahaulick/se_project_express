const router = require("express").Router();
const {
  createItem,
  deleteItem,
  likeItem,
  dislikeItem,
} = require("../controllers/clothingItems");
const {
  validateCardBody,
  validateId,
} = require("../middlewares/validation");

router.post("/", validateCardBody, createItem);

router.delete("/:id", validateId, deleteItem);
router.put("/:id/likes", validateId, likeItem);
router.delete("/:id/likes", validateId, dislikeItem);

module.exports = router;
