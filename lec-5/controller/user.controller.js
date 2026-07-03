const User = require("../model/user.mode")
module.exports.postRegisterUser=async(req,res)=>{
    //1. extract all the field that are required to add in database
    let {name,email,password,phone} = req.body;
    //create is used to add new document in collection
    let newUser = await User.create({
        name:name,
        email:email,
        password:password,
        phone:phone
    })
    console.log(newUser);
    res.json({
        success:true,
        data:newUser
    })
}
module.exports.deleteOneUserById=async(req,res)=>{
    let {id} = req.params;
   let deletedUser=await User.findByIdAndDelete(id);
   console.log(deletedUser);
//   return next(err);
   res.json({
    success:true,
    data:deletedUser,
    message:"user deleted successfully"
   })
}
module.exports.patchUpdateUser=async(req,res)=>{
    // let{name,email} = req.body;
    let {id} = req.params;
    let prevUser = await User.findByIdAndUpdate(id,req.body);
    res.json({
        success:true,
        data:prevUser
    })

}
module.exports.postLoginUser=async(req,res)=>{
    let {email,password} = req.body;
    let userExist = await User.findOne({email:email});
    if(!userExist){
        res.json({
            success:false,
            message:"user does not exist with the mail that you have entered"
        })
        return;
    }
    if(userExist.password!=password){
        res.json({
            success:false,
            message:"Incorrect password"
        })
        return;
    }
    res.json({
        success:true,
        message:"Login successfull"
    })
}