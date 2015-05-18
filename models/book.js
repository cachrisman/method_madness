var mongoose = require("mongoose");


var BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    description: String
});

var Book = mongoose.model("Book", BookSchema);

module.exports = Book;
