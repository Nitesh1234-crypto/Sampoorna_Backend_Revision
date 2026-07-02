const User = require("../model/user.model")
module.exports.postRegisterUser = async(req,res)=>{
    let {name,email,password} = req.body;
   let newUser=await User.create({
        name:name,
        email:email,
        password:password
    })
    res.json({
        success:true,
        data:newUser
    })
}

module.exports.postLoginUser=async(req,res)=>{
    let {email,password} = req.body;
    let userExist= await User.findOne({email:email});
    if(!userExist){
        return res.json({
            success:false,
            data:null,
            message:"User does not exit please register"
        })
    }
    if(userExist.password!=password){
        return res.json({
            success:false,
            data:null,
            message:"incorrect Password"
        })
    }
    //express-session package
    req.session.userid=userExist._id
    res.json({
        success:true,
        message:"login successfull"
    })

}