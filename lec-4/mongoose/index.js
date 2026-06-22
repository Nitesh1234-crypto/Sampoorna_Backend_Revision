const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
const User = require("./model/user.model");

async function addUser(name,age,email){
    //how to add a new user using mongoose;
    //1. using save() method
    let newUser = new User({
        name:name,
        age:age,
        email:email
    })
    await newUser.save();
}
addUser("Ritik",25,"ritik@gmail.com")
.then(()=>console.log("user added"))
.catch((e)=>console.log(e));

//create a function which insert a new user with name , age and email
mongoose.connect("mongodb://127.0.0.1:27017/mongoosedatabase")
.then(()=>console.log("db connected!!"))
.catch((e)=>console.log(e));
app.listen(7687,()=>{
console.log('server started')
})