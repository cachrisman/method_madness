var mongoose = require("mongoose");

var authorSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number
});

// Author.csvCreate("jack,dow,13", function...)
authorSchema.statics.csvCreate = function(csvStr, cb) {
    var attrs = csvStr.split(",");
    this.create({
        firstName: attrs[0],
        lastName: attrs[1],
        age: parseInt(attrs[2])
    }, cb);
};

authorSchema.methods.fullName = function() {
    return this.firstName + " " + this.lastName;
};

var Author = mongoose.model("Author", authorSchema);
module.exports = Author;
