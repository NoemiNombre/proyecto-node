// importamos mongoose para importar y definir el esquema 

const mongoose = require("mongoose");
// definimosn el schema 

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },

    nombrePropietario: {
        type: String,
        required: true
    },

    marcaAutomovil: {
        type: String,
        required: true
    },

    precio: {
        type: Number,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    }
})

// crear modelo de usr 
const User= mongoose.model('User', userSchema)

// Exportamos el module para userlo en todas partes 
module.exports = User




// 'use strict'

// const mongoose = require('mongoose');

// var Schema = mongoose.Schema;

// var UserSchema = Schema({
//     ideuser:Number,
//      age: Number,
//      lastname: String,
//      name: String,
//      email: String

// });

// module.exports= mongoose.model('usuarios',UserSchema)