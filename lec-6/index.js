const express = require("express");
const app = express();
app.use(m1); //application level

app.use(m2);

app.get("/",(req,res,next)=>{
    console.log("/ get request");
   return next("kuch error aa gya hai tu dekh le kya bhjna hai");
   res.send("hello world");

    //if something wrong happen here we can move the request forward to some other middlerware
    // next();
    // return;
    // res.send("hello world");
    // next();

})
app.use(m3);
app.get("/about",m4,(req,res,next)=>{
    let flag = true;
    if(flag){
       return next("mai request puri nhi kr rha kuki iske request mai gadbad hai")
    }
    console.log("about run hua");
    res.send("About page");
})

app.use((err,req,res,next)=>{
    console.log(err);
    res.send("Internal server error");
})

app.listen(4454,()=>{
    console.log("server started");
})


function m1(req,res,next){
    console.log("done some work in middleware one");
    next();
}
function m2(req,res,next){
    console.log("done some work in middleware Two");
    next();
}
function m3(req,res,next){
    console.log("done some work in middleware Three");
    next();
}
function m4(req,res,next){
    console.log("middleware 4");
    next();

}