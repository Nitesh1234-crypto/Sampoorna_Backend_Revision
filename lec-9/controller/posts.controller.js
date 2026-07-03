const Post = require("../model/post.model")
const User = require("../model/user.model")
module.exports.postAddPost=async(req,res)=>{
    let {title,desc} = req.body;
    let newPost =await Post.create({
        title:title,
        desc:desc,
        userId:req.id
    })
    //user.post.push(postId);
 
    res.json({
        success:true,
        data:newPost,
        message:"post added successfull",
    
    })
}
module.exports.deletePost=async(req,res)=>{
    let {id} = req.params;
    let deletedPost =await Post.findByIdAndDelete(id);
    res.json({
        success:true,
        message:"post deleted successfully",
        data:deletedPost
    })
}