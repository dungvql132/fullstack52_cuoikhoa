const express = require('express');
const app = express();
const Book = require('./book.router');
app.use("/book",Book);
module.exports = app;