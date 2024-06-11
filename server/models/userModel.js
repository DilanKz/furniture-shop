const mongoose = require('mongoose');

const UserModel = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        index: true,
        primaryKey: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    address: {
        type: String,
    },
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
            required: true,
        },
        count: {
            type: Number,
            required: true,
            min: 1,
        },
    }],
    favorite: [{
        type: String,
    }],
});

const User = mongoose.model('User', UserModel);
module.exports = User;
