const mongoose = require('mongoose');

const ProductModel = mongoose.Schema({
    sku: {
        type: String,
        required: true,
        unique: true,
        index: true,
        primaryKey: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    count: {
        type: Number,
        required: true,
    },
    additionalData: {
        type: String,
        required: true,
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
        required: true,
    },
    ratings: {
        type: [String],
        required: true,
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

const Article = mongoose.model('Products', ProductModel);
module.exports = Article;
