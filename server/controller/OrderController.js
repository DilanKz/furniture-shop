const Order = require("../models/OrderModel");
const Product = require("../models/ProductModel");
const User = require("../models/userModel");

const OrderController = {
    addOrder: async (req, res, next) => {
        const session = await Order.startSession();
        session.startTransaction();
        try {
            const {email, name, address, items, total, state, shipping} = req.body;

            const addressArr = [{address: address}]

            const newOrder = new Order({
                email,
                name,
                address: addressArr,
                items,
                total,
                state,
                shipping
            });

            // Save the order within the session
            await newOrder.save({session});

            // Update product counts
            for (const item of items) {
                const product = await Product.findOne({sku: item.sku}).session(session);
                if (!product) {
                    throw new Error(`Product with SKU ${item.sku} not found`);
                }
                if (product.count < item.count) {
                    throw new Error(`Insufficient stock for SKU ${item.sku}`);
                }
                product.count -= item.count;
                await product.save({session});
            }

            const user = await User.findOne({email: email}).session(session)
            if (user) {
                user.cart = []
                await user.save({session})
            } else {
                throw new Error(`No user found in this email - ${email}`);
            }

            await session.commitTransaction();
            session.endSession();

            res.status(201).json({success: true, data: {order: newOrder, user}, message: "Order created successfully"});

        } catch (error) {
            await session.abortTransaction();
            session.endSession();
            console.error('Error creating order:', error);
            res.status(500).json({success: false, message: "Error creating order", error: error.message});
        }
    },
    loadAllOrders: async (req, res, next) => {
        try {
            let allOrders = await Order.find();
            res.status(200).json({success: true, data: allOrders, message: "All orders retrieved successfully"});
        } catch (error) {
            res.status(500).json({success: false, message: "Error creating order", error: error.message});
        }
    },
    approve: async (req, res, next) => {
        try {
            const { orderId } = req.body;
            const order = await Order.findById(orderId);

            if (!order) {
                return res.status(404).json({ success: false, message: "Order not found" });
            }

            order.state = 'approved';
            await order.save();

            res.status(200).json({ success: true, data: order, message: "Order approved successfully" });
        } catch (error) {
            res.status(500).json({success: false, message: "Error creating order", error: error.message});
        }
    },
    denied: async (req, res, next) => {
        try {
            const { orderId } = req.body;
            const order = await Order.findById(orderId);

            if (!order) {
                return res.status(404).json({ success: false, message: "Order not found" });
            }

            order.state = 'denied';
            await order.save();

            res.status(200).json({ success: true, data: order, message: "Order denied successfully" });
        } catch (error) {
            res.status(500).json({ success: false, message: "Error denying order", error: error.message });
        }
    }
}

module.exports = OrderController;