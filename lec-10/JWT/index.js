const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(express.json());
const Jwt = require("jsonwebtoken");
const User = require("./model/user.model");


app.get("/",isLogin,async(req,res)=>{
      let id = req.id;
      let user =await User.findById(id)
        res.send("hello world==>"+user.name)
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
    
    let token = Jwt.sign({id:userExist._id},"kuch bhi");
    res.cookie("token",token);
    res.json({
        success:true,
        message:"login successfull",
        token:token
    })
})






mongoose.connect('mongodb://127.0.0.1:27017/jwt')
.then(()=>console.log('db connected'))
app.listen(7666,()=>{
console.log('server started')
})


async function isLogin(req,res,next){
    let token = req.cookies.token || req.headers.authorisation;
    console.log(token);
    if(!token){
        return res.json({
            message:"please login "
        })
    }
    let decode = Jwt.verify(token,"kuch bhi");
    console.log(decode);
    if(!decode){
        return res.json({
            message:"Invalid token"
        })
    }
    let userId = decode.id;
    req.id = userId;
    next();

}
