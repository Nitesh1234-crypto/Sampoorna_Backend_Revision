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
    console.log("about handle"+"==>"+req.id);
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
    /**
     * obj={
     * a:10,
     * b:20
     * }
     * obj.c=50
     * obj={
     * a:10,
     * b:20,
     * c:50
     * }
     */
    // req.id="45";
    console.log("done some work in middleware one");
    next();
}
function m2(req,res,next){
    // console.log("m2 ke andar console kr rha hu id ki value"+"==>"+req.id)
    console.log("done some work in middleware Two");
    next();
}
function m3(req,res,next){
    //  console.log("m3 ke andar console kr rha hu id ki value"+"==>"+req.id)
    console.log("done some work in middleware Three");
    next();
}
function m4(req,res,next){
    //  console.log("m4 ke andar console kr rha hu id ki value"+"==>"+req.id)
    req.id="dfjfds932984329849832"
    console.log("middleware 4");
    next();

}