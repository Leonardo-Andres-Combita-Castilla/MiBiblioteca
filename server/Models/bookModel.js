// documentacion mongoose models = mongoosejs.com

const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    author: {
        type: String,
    }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;