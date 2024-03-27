const mongoose = require("mongoose")

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    bookQuantity: {
        type: Number,
        required: false,
    }

}, { timestamps: true })

module.exports = mongoose.model("category", categorySchema)