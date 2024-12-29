const mongoose= require("mongoose")
const dotenv = require("dotenv");

dotenv.config();

Mongo_URI=process.env.MONGOURI;

const AsyncConnectDB= async ()=>{
    try{
        await mongoose.connect(Mongo_URI);
        console.log('MongoDB connected successfully by Async and Await');
    }catch(err){
        console.log(`Server Not Connected ${err}`)
    }
}

module.exports=AsyncConnectDB;