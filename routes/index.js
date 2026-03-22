const router = require("express").Router();
const { NOT_FOUND, ERROR_MESSAGES } = require("../utils/errors");
const { createUser, login } = require("../controllers/users");
const { getItems } = require("../controllers/clothingItems");
const auth = require("../middlewares/auth");

const userRouter = require("./users");
const clothingItemsRouter = require("./clothingItems");

router.post("/signup", createUser);
router.post("/signin", login);
router.get("/items", getItems);

router.use("/users", auth, userRouter);
router.use("/items", auth, clothingItemsRouter);
router.use((req, res) => {
  res.status(NOT_FOUND).send({ message: ERROR_MESSAGES.ROUTE_NOT_FOUND });
});

module.exports = router;
