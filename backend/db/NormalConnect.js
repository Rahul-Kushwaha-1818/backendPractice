const mongoose = require("mongoose");
const dotenv = require("dotenv")

dotenv.config();

Mongo_URI=process.env.MongoURI;

// Connect to MongoDB using async/await
async function connectDBAsyncNormal() {
    try {
        await mongoose.connect(Mongo_URI);
        console.log('MongoDB connected successfully Using Async and Await with Normal function');
    } catch (err) {
        console.error("MongoDB connection failed:", err);
        process.exit(1); // Exit the process with a failure code
    }
}

module.exports=connectDBAsyncNormal;