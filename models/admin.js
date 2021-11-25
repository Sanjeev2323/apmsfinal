const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({

    name: String,

    role: {
        type: String,
        default: "admin",
        enum: ["admin", "clerk", "tenant"]
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    token1: { type: String }
})

module.exports = mongoose.model('admin', adminSchema);