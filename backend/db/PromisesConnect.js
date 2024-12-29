const mongoose = require("mongoose")
const dotenv=require("dotenv")

dotenv.config()

const Mongo_URI=process.env.MongoURI;

const ConnectUsingPromises=()=>{
    mongoose.connect(Mongo_URI).then(()=>{
        console.log(`The Database is Connected Using Promises`);
    }).catch((err)=>{
        console.log(`Server give error ${err}`)
    })
}

module.exports=ConnectUsingPromises