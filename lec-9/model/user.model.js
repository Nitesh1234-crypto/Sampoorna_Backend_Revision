const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    postIds:[{
       type:mongoose.Types.ObjectId,
       ref:"Post"
    }]
})

const userModel = mongoose.model("User",userSchema);
module.exports=userModel;