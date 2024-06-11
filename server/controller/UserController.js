const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
let mailSender = require('../utils/mailSender');
let otpGenerator = require('../utils/otpGenerator');
const mongoose = require('mongoose');

const userController = {
    getUserCredentials: async function (req, res, next) {
        try {
            const {mail, password} = req.body;
            const user = await User.findOne({email: mail});

            if (!user || !(await bcrypt.compare(password, user.password))) {
                return res.status(401).json({success: false, message: 'Invalid email or password'});
            }

            res.status(200).json({success: true, data: user, message: 'User credentials retrieved successfully'});
        } catch (error) {
            res.status(500).json({success: false, message: 'Internal Server Error', error: error.message});
        }
    },

    saveUserCredentials: async function (req, res, next) {
        try {
            const userCred = req.body;
            const hashedPassword = await bcrypt.hash(userCred.password, 10);
            const savedUser = await User.findOne({email: userCred.email});

            if (!savedUser) {
                const user = await User.create({
                    email: userCred.email,
                    password: hashedPassword,
                    name: userCred.name,
                    image: userCred.image,
                });

                res.status(201).json({success: true, data: user, message: 'User created successfully'});
            } else {
                res.status(409).json({success: false, message: 'User already exists'});
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({success: false, message: 'Internal Server Error', error: error.message});
        }
    },

    getOTP: async function (req, res, next) {
        try {
            let {email} = req.body;
            const savedUser = await User.findOne({email: email});

            if (savedUser) {
                let otp = otpGenerator.getOtp();
                const mailOptions = {
                    from: 'your-email@example.com',
                    to: email,
                    subject: 'OTP Code',
                    text: `This is your OTP code for password reset: ${otp}`,
                };

                await mailSender.sendMail(mailOptions);

                res.status(200).json({success: true, data: otp, message: 'OTP sent successfully'});
            } else {
                res.status(404).json({success: false, message: 'User doesn\'t exist'});
            }
        } catch (error) {
            res.status(500).json({success: false, message: 'Internal Server Error', error: error.message});
        }
    },

    /*getRequested: async function (req, res, next) {
        try {
            const users = await User.find({accountType: 'requested'});
            res.status(200).json({success: true, data: users, message: 'Requested users retrieved successfully'});
        } catch (error) {
            res.status(500).json({success: false, message: 'Internal Server Error', error: error.message});
        }
    },*/

    updateCredentials: async function (req, res, next) {
        try {
            const {email, name, address, contact, image} = req.body;

            const updatedUser = await User.findOneAndUpdate(
                {email: email},
                {
                    $set: {
                        name: name || '',
                        address: address || '',
                        contact: contact || '',
                        image: image || '',
                    },
                },
                {new: true}
            );

            if (updatedUser) {
                res.status(200).json({
                    success: true,
                    data: updatedUser,
                    message: 'User credentials updated successfully'
                });
            } else {
                res.status(404).json({success: false, message: 'User not found'});
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({success: false, message: 'Internal Server Error', error: error.message});
        }
    },

    updatePassword: async function (req, res, next) {
        try {
            const {mail, password} = req.body;
            const savedUser = await User.findOne({email: mail});

            if (savedUser) {
                savedUser.password = await bcrypt.hash(password, 10);
                await savedUser.save();

                res.status(200).json({success: true, message: 'Password successfully changed'});
            } else {
                res.status(404).json({success: false, message: 'User doesn\'t exist'});
            }
        } catch (error) {
            console.error('Error updating password:', error);
            res.status(500).json({success: false, message: 'Internal Server Error', error: error.message});
        }
    },

    swapAccount: async function (req, res, next) {
        try {
            const {email, type} = req.body;

            const updatedUser = await User.findOneAndUpdate(
                {email: email},
                {$set: {accountType: type}},
                {new: true}
            );

            res.status(200).json({success: true, data: updatedUser, message: 'Account type updated successfully'});
        } catch (error) {
            res.status(500).json({success: false, message: 'Error changing account type', error: error.message});
        }
    },

    getOne: async function (req, res, next) {
        try {
            const {_id} = req.body;
            const user = await User.findOne({_id: _id});

            if (user) {
                res.status(200).json({success: true, data: user, message: 'User retrieved successfully'});
            } else {
                res.status(404).json({success: false, message: 'User not found'});
            }
        } catch (error) {
            res.status(500).json({success: false, message: 'Error finding user', error: error.message});
        }
    },

    getStats: async function (req, res, next) {
        try {
            const db = mongoose.connection.db;
            const dbStats = await db.stats();

            const storageSizeMB = dbStats.storageSize / (1024 * 1024);
            const dataSizeMB = dbStats.dataSize / (1024 * 1024);
            const mbLeft = storageSizeMB - dataSizeMB;

            res.status(200).json({
                success: true,
                data: {storageSizeMB, dataSizeMB, mbLeft},
                message: 'Database stats retrieved successfully'
            });
        } catch (error) {
            res.status(500).json({success: false, message: 'Error retrieving database stats', error: error.message});
        }
    }
}

module.exports = userController;
