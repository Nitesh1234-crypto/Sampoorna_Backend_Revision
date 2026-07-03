const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:String,
    phone:Number,
    email : {
        type : String,
        require:true
    },
    isSubscribed:{
        type:Boolean,
        default:false,
    },
    password:String
})
const User = mongoose.model("User",userSchema);
module.exports=User;