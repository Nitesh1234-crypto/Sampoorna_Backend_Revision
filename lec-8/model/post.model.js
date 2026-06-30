const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
    title:String,
    desc:String,
    userId:{
        type:mongoose.Types.ObjectId,
        ref:"Post"
    }
})

const PostModel = mongoose.model("Post",postSchema);
module.exports=PostModel;