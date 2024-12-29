const mongoose = require('mongoose');
const dotenv = require("dotenv")

dotenv.config()

Mongo_URI=process.env.MongoURI;

const connectNormal=()=>{
    mongoose.connect(Mongo_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB by Noraml'))
    .catch((err) => console.log('Failed to connect to MongoDB', err));
}

module.exports=connectNormal