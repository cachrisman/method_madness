var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/method_test");

var Book = require("./book");
var Author = require("./author");

module.exports.Book = Book;
module.exports.Author = Author;
