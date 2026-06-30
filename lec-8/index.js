const express = require('express');
const mongoose = require('mongoose');
const app = express();
const session = require("express-session")
const cookieParse = require("cookie-parser");
const User = require("./model/user.model");
const Post= require('./model/post.model');
app.use(cookieParse());
app.use(session({
    secret:"bevkuff"
}))
app.use(express.json());
// user --> name ,email,password
//post -> Title, desc
app.get("/",(req,res)=>{
    res.send(req.session.userid);
})
app.post("/posts",isLogin,async(req,res)=>{
    let {title,desc} = req.body;
    let newPost =await Post.create({
        title:title,
        desc:desc,
        userId:req.id
    })
    res.json({
        success:true,
        data:newPost,
        message:"post added successfull"
    })
})

app.post("/login",async(req,res)=>{
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

})
app.post("/register",async(req,res)=>{
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


})


mongoose.connect('mongodb://127.0.0.1:27017/instagram')
.then(()=>console.log('db connected'))
app.listen(7688,()=>{
console.log('server started')
})

function isLogin(req,res,next){
    let userid = req.session.userid;
    let user = User.findById(userid);
    if(!user){
        return res.json({
            success:false,
            message:"Not authorised please login.."
        })
    }
    req.id=userid;
    next();

}