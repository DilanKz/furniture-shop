// db/DBConnection.js
const mongoose = require('mongoose');
require('dotenv').config();

const DBConnection = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.info(`Mongo DB Connected: ${connection.connection.host}`);
    } catch (e) {
        console.error(`Couldn't connect to MongoDB: ${e}`);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = DBConnection;
