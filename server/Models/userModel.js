const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    nombres: {
        type: String,
        required: true
    },

    apellidos : {
        type: String,
        lowercase: true,
        required: true
    },

    DNI: {
        type: Number,
        required: true,
        unique: true
    },

    Fecha_de_nacimiento: {
        type: Date,
        required:true
    },

    rol: {
        type: String,
        default: 'cliente'
    },

    telefono: {
        type: String,
        requeried: true,
        unique: true
    },

    email: {
        type: String,
        requeried: true,
        unique: true
    },

    nickName: {
        type: String,
        requeried: true,
        unique: true
    },

    contraseña: {
        type: String,
        requeried: true,
        unique: true
    },
})

const User = mongoose.model("User", userSchema);

module.exports = User;

