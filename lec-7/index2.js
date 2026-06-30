const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const session = require("express-session");
app.use(cookieParser())
app.use(session({
    secret:"knock knock",
    cookie:{maxAge:900000}
}))

app.get("/set-session",(req,res)=>{
    req.session.name="Nitesh";
    res.send("session has been set");

})
app.get("/get-session",(req,res)=>{
    let name=req.session.name;
    console.log(name);
    res.send("Hi "+ name);
})
app.get("/",(req,res)=>{
    res.send("hello world");
})


app.listen(5556,()=>{
    console.log("server started")
})