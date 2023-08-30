const mongoose = require('mongoose')

const employeeSchema = mongoose.Schema({
    nombres: {
        type: String,
        lowercase: true,
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
        lowercase: true,
        requeried: true
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
        requeried: true
        
    },

    clientes: {

    }

})

const employees = mongoose.model("employee", employeeSchema);

module.exports = employees;

// ROL {
// - Administradores
// - Empleados