const Book = require("../models/book");

const getAllBooks = async (req, res) => {
  try {
    const result = await Book.find({});
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBookById = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Book.findById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createBook = async (req, res) => {
  try {
    const result = await Book.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const result = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const result = await Book.findByIdAndDelete(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
