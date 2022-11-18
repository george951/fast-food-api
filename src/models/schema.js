const mongoose = require("mongoose")

const ItemsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'you have to choose the food'],
        trim:true,
        maxlength:20
    },
    size: {
        type: String,
        required:[true, 'you have to choose between sm, md, lg, xl'],
        trim:true,
        maxlength:2
    },
    side: Boolean,
    price: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        default: "EUR"
    },
    type: {
        type: String,
        trim:true,
        default:"default",
        maxlength: 20
    }
})

module.exports = mongoose.model("Items", ItemsSchema)