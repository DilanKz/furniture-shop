const mongoose = require('mongoose');

const UserModel = mongoose.Schema({
    email: {
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
    image: {
        type: String,
    },
    address: [{
        address: String,
    }],
    contact: {
        type: String,
    },
    accountType: {
        type: String,
        enum: ['admin', 'employee', 'courier', 'user', 'banned', 'admin'],
        default: 'user',
    },
    cart: [{
        sku: {
            type: String,
        },
        count: {
            type: Number,
            min: 1,
        },
        price: {
            type: String
        },
    }],
    favorite: [{
        type: String,
    }],
});

const User = mongoose.model('User', UserModel);
module.exports = User;
