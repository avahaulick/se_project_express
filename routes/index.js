const router = require("express").Router();
const { NOT_FOUND, ERROR_MESSAGES } = require("../utils/errors");

const userRouter = require("./users");
const clothingItemsRouter = require("./clothingItems");

router.use("/users", userRouter);
router.use("/items", clothingItemsRouter);
router.use((req, res) => {
  res.status(NOT_FOUND).send({ message: ERROR_MESSAGES.ROUTE_NOT_FOUND });
});

module.exports = router;
