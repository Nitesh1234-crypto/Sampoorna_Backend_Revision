const mongoose = require("mongoose");
const { type } = require("node:os");

const userSchema = new mongoose.Schema({
    name:String,
    age:Number,
    email:{
        type:String,
        require:true
    }
})
const User = mongoose.model("User",userSchema);
module.exports=User;