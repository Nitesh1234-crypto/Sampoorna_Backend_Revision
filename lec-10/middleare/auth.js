const User = require("../model/user.model")
async function isLogin(req,res,next){
    let userid = req.session.userid;
    let user = await User.findById(userid);
    if(!user){
        return res.json({
            success:false,
            message:"Not authorised please login.."
        })
    }
    req.id=userid;
    next();

}

module.exports.isLogin=isLogin;