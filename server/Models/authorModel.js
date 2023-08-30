const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
    nombre: {
        type: String
    },
    nacionalidad: {
        type: String
    },
    edad: {
        type: Number
    }
});

const Author = mongoose.model("author", authorSchema);

module.exports = Author;