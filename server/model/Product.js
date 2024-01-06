const mongoose = require('mongoose');

const ProductModel = mongoose.Schema(
    {
        "id": {
            require: true,
            type: Number,
            unique: true,
            index: true // for better performance
        },
        "name": {
            require: true,
            type: String
        },
        "currency": {
            type: String
        },
        "price": {
            require: true,
            type: Number
        },
        "image": {
            type: String
        }
    },
    { versionKey: false }
)

const product = mongoose.model('Product', ProductModel);
module.exports = product;