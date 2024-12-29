const express = require("express");
const router  = express.Router();

router.get("/Home",(req,res)=>{
    res.send("This is by using the Router");
});

module.exports=router;