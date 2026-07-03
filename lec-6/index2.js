const express = require("express");
const app = express();
app.use(m1);
app.use(m2);
app.get("/",(req,res)=>{
    res.send("hello world")

})
function m1(req,res,next){
    let idcard = req.query.idcard;
    console.log(typeof idcard);
    console.log("m1 chla hai")
    if(idcard =="false"){
        return res.send("wapis chla jaa andar nhi ghus skta");
    }
    req.appointent=true;
    next();

}
function m2(req,res,next){
    console.log("m2 chla ")
    if(!req.appointent){
      return  res.send("appointment lekar aa verna andar office mai nhi jane dunga")
    }
    next();
}

app.listen(6637,()=>{
    console.log("server started")
})