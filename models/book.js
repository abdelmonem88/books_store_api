const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
  },

  auther: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },

  descreption: {
    type: String,
    required: true,
    minlength: 20,
    maxlength: 500,
  },

  price: {
    type: Number,
    required: true,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
