const express = require('express');
const mongoose = require('mongoose');
const userRouter = require("./routes/user.router")
const app = express();
app.use(express.json());
app.use("/users",userRouter);

// app.use("/movie",movieRouter);
// app.use("/series",seriesRouter);
// app.use("/admin",adminRouter)



//app.use(error-handling middleware)
mongoose.connect('mongodb://127.0.0.1:27017/sampoornamongoose')
.then(()=>console.log('db connected at sampoornamongoose'))
app.listen(7687,()=>{
console.log('server started')
})