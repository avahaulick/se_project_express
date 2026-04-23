const router = require("express").Router();
const { ERROR_MESSAGES } = require("../utils/errors");
const { NotFoundError } = require("../errors");
const { createUser, login } = require("../controllers/users");
const { getItems } = require("../controllers/clothingItems");
const auth = require("../middlewares/auth");
const {
  validateUserBody,
  validateAuthentication,
} = require("../middlewares/validation");

const userRouter = require("./users");
const clothingItemsRouter = require("./clothingItems");

router.post("/signup", validateUserBody, createUser);
router.post("/signin", validateAuthentication, login);
router.get("/items", getItems);

router.use("/users", auth, userRouter);
router.use("/items", auth, clothingItemsRouter);
router.use((req, res, next) => {
  next(new NotFoundError(ERROR_MESSAGES.ROUTE_NOT_FOUND));
});

module.exports = router;
