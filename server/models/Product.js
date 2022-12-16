const mongoose = require('mongoose')

const {Schema} = mongoose

const productSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0
    },
    description: String,
    image: String,
    size: [String]
})

module.exports = mongoose.model('Product', productSchema)