const User = require("../model/user.model")
module.exports.getUserProfile = async(req,res)=>{
    let id = req.id;
    let userProfile =await User.findById(id).populate("postIds");
    res.json({
        success:true,
        data:userProfile
    })

}