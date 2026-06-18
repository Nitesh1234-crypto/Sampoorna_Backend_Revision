const express = require("express");
const app = express();
app.use(express.json());
app.get("/blogs",(req,res)=>{
   
    res.json(blogs);

})
app.get("/getOneBlog",(req,res)=>{
    console.log(req.query);
    let id = req.query.id;
    console.log(id);
    let blog=null;
    for(let i =0;i<blogs.length;i++){
        if(blogs[i].id==id){
            blog=blogs[i];
        }

    }

    res.json(blog);

})

app.post("/addblog",(req,res)=>{
        let title = req.body.title;
        let desc = req.body.desc;
        console.log(title,desc);
        let newblog = {
            id:Math.floor(Math.random()*1000000),
            title:title,
            desc:desc
        }
        blogs.push(newblog);
        res.json(blogs);
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
            //
            break;
        }
    }
    res.json(blogs);

})

app.patch("/partialupdate/:id",(req,res)=>{
    let id = req.params.id;
    for(let i =0;i<blogs.length;i++){
        if(blogs[i].id==id){
            blogs[i]={...blogs[i],...req.body};
            break;
        }
    }
    res.json(blogs);
})

app.listen(5555,()=>{
    console.log("server started");
})