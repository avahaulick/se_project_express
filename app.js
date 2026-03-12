const express = require("express");
const mongoose = require("mongoose");
const mainRouter = require("./routes");

const app = express();
const { PORT = 3001 } = process.env;

mongoose.connect("mongodb://localhost:27017/wtwr_db").catch(console.error);

app.use(express.json());
app.use((req, res, next) => {
  req.user = {
    _id: "507f1f77bcf86cd799439011",
  };
  next();
});

app.use("/", mainRouter);

app.listen(PORT);
