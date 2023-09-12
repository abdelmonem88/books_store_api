const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = (cb) => {
  mongoose
    .connect(process.env.mongoDB_URI)
    .then(() => {
      console.log("Database connected successfully");
      cb();
    })
    .catch((err) => {
      throw new Error(err);
    });
};

module.exports = connectDB;
