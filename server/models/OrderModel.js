const mongoose = require('mongoose');
const shortid = require('shortid');

const OrderModel = mongoose.Schema({
    orderId: {
        type: String,
        unique: true,
        default: () => `ORD-${shortid.generate()}`,
        index: true,
    },
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    address: [{
        address: String,
    }],
    items: [{
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
    total: {
        type: String,
        required: true
    },
    state: {
        type: String,
        enum: ['requested', 'approved'],
        default: 'requested',
    },
    shipping: {
        type: {
            type: String
        },
        price: {
            type: String
        }
    }
});

const Order = mongoose.model('Orders', OrderModel);
module.exports = Order;