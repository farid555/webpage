const mongoose = require('mongoose')


const signUpTemplate = new mongoose.Schema({

    fullName: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    username: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        maxlength: 14,
    },

    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('mytable', signUpTemplate)