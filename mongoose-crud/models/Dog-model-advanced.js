const mongoose = require('mongoose')

const Schema = mongoose.Schema
const dogSchema = new Schema({
    name: {
        type: String,
        required: true,
        default: 'Desconcido',
        set: text => text.charAt(0).toUpperCase() + text.substring(1)
    },
    age: {
        type: Number,
        min: 1,
        max: 20
    },
    color: {
        type: String,
        enum: ['brown', 'white', 'black']
    },
    code: {
        type: String,
        match: /^\d{5}[A-Z]$/           // Obligará a que sean 5 dígitos y una mayúscula
    },
    location: {
        address: String,
        city: String
    },
    email: {
        type: String,
        validate: {
            validator: text => text.endsWith('@ironhack.com'),
            message: "El correo debe ser interno"
        }
    }
}, {
    timestamps: true
})

const Dog = mongoose.model('Dog', dogSchema)

module.exports = Dog