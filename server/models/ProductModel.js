const mongoose = require('mongoose');

const ProductModel = mongoose.Schema({
    sku: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
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

const Article = mongoose.model('Article', ProductModel);
module.exports = Article;
