const mongoose = require("mongoose")

const bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    bookQuantity: {
        type: Number,

    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model("Book", bookSchema)