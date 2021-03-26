const mongoose = require('mongoose')

// User Schema

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        require: true,
        maxlength: 32,
    },

    email: {
        type: String,
        trim: true,
        require: true,
        unique: true
    }
})

module.exports = mongoose.model("User", userSchema)