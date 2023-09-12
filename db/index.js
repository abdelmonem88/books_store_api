const mongoose = require("mongoose");

const connectDB = (cb) => {
  mongoose
    .connect(
      "mongodb+srv://abdelmonem:Men3m1888@cluster0.azmdi.mongodb.net/books_store?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("Database connected successfully");
      cb();
    })
    .catch((err) => {
      throw new Error(err);
    });
};

module.exports = connectDB;
