const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser())
app.get("/",(req,res)=>{
    res.send("hello world");
})
app.get("/set-cookie",(req,res)=>{
    //cookie store 
    res.cookie("name","Nitesh");
    res.cookie("user",JSON.stringify({id:1,name:"falana",email:"falana@gmail.com"}))
    res.send("cookie has been set");
})
app.get("/get-cookie",(req,res)=>{
    //cookie read
   
    let name=req.cookies.name;
    let user = JSON.parse(req.cookies.user);
    // console.log(cookieValue);
    res.send("Hi==>"+user.name + "==>"+user.email );

})

app.listen(5555,()=>{
    console.log("server started")
})