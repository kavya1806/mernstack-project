const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/CLIENT', {
            useUnifiedTopology: true
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        // Handle the error appropriately (e.g., log it, exit the application)
        process.exit(1); // Exit the application with an error status code
    }
};

module.exports = connectDb;
