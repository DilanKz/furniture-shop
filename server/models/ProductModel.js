const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const ProductModel = mongoose.Schema({
    sku: {
        type: Number,
        unique: true,
        index: true
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
    },
    description: {
        type: String,
    },
    count: {
        type: Number,
    },
    additionalData: {
        type: String,
    },
    image1: {
        type: String,
        required: true,
    },
    image2: {
        type: String,
        required: true,
    },
    image3: {
        type: String,
        required: true,
    },
    image4: {
        type: String,
        required: true,
    },
    category: {
        type: [String],
    },
    ratings: {
        type: [String],
        default:0
    },
    postDate: {
        type: Date,
        default: Date.now,
    },
    clicks: {
        type: Number,
        default: 0,
    },
    availability: {
        type: String,
        enum: ['available','un-available'],
        default: 'available',
    }
});

ProductModel.plugin(AutoIncrement, {inc_field: 'sku'});
const Article = mongoose.model('Products', ProductModel);
module.exports = Article;
