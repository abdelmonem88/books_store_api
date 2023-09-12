const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const connectDB = require("./db");
const booksRoutes = require("./routes/books");

app.use("/api/v1", booksRoutes);

const ServerListen = () => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

connectDB(ServerListen);
