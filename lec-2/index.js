const express = require("express");
const app = express();
app.use(express.json());
let blogs = [
        {id:1,title:"My title",
        desc:"coding mtlb coding blocks"},
        {id:2,title:"My title",
        desc:"coding mtlb coding blocks"},
        {id:3,title:"My title",
        desc:"coding mtlb coding blocks"},
        {id:4,title:"My title",
        desc:"coding mtlb coding blocks"}]
app.get("/",(req,res)=>{
    res.send("hello world");
})

app.delete("/deleteblog/:id",(req,res)=>{
    let id = req.params.id;
    for(let i=0;i<blogs.length;i++){
        if(blogs[i].id==id){
            blogs.splice(i,1);
            break;
        }
    }
    res.json(blogs);
})
app.delete("/deleteblogbytitle",(req,res)=>{
    let title = req.body.title;
    let newblogs = blogs.filter((blog)=>blog.title!=title);
    blogs=newblogs;
    res.json(blogs);

})

app.put("/updateblog/:id",(req,res)=>{
    let id = req.params.id;
    for(let i =0;i<blogs.length;i++){
        if(blogs[i].id==id){
            blogs[i]={id:id,...req.body};
            break;
        }
    }
    res.json(blogs);

})


app.listen(4444,()=>{
    console.log("server started");
})