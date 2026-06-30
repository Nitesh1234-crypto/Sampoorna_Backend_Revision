const express = require("express");
const app = express();
const session = require("express-session");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(session({
    secret:"dfdsfdsfdfds",
    cookie:{maxAge:56767657456456}
}))
function protect(req,res,next){
    let isLogin=req.session.isLogin;
    if(!isLogin){
        return res.send("please login")
    }
    next();

}
app.get("/",protect ,(req,res)=>{
    res.send("welcome to my blog website")
})
//i dont want email password , i just want user to send request to login route
app.get("/login",(req,res)=>{
    req.session.isLogin=true;
    res.send("login successfull");
})

app.listen(4433,()=>{
    console.log("server started")
})