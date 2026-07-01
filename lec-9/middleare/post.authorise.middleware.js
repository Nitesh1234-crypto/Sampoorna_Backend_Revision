const Post = require("../model/post.model")
async function isAllowed(req,res,next){
    let {userid} = req.session;
    let postId = req.params.id;
    let postExist = Post.findById(postId);
    if(!postExit){
        return res.json({
            success: false,
            message:"post does not exist"
        })
    }
    if(postExit.userId!=userid){
      return res.json({
        success:false,
        message:"Not authorised to delete"
      })  
    }
    next();

}
module.exports.isAllowed=isAllowed