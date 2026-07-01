const express = require('express');
const mongoose = require('mongoose');
const app = express();
const session = require("express-session")
const cookieParse = require("cookie-parser");
app.use(cookieParse());
app.use(session({
    secret:"bevkuff"
}))
app.use(express.json());
app.use("/auth",require("./routes/auth.router"))
app.use("/posts",require("./routes/post.router"))

mongoose.connect('mongodb://127.0.0.1:27017/instagram')
.then(()=>console.log('db connected'))
app.listen(7688,()=>{
console.log('server started')
})

