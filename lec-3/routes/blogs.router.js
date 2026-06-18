const express = require("express");
const router = express.Router();
let blogs=[
    {id:1,title:"dhfsdfs",desc:"dsfdsfdsfs"}
]

router.get("/",(req,res)=>{
   
    res.json(blogs);

})
router.get("/:id",(req,res)=>{
    let id = req.params.id;
    console.log(id);
    let blog=null;
    for(let i =0;i<blogs.length;i++){
        if(blogs[i].id==id){
            blog=blogs[i];
        }

    }

    res.json(blog);

})

router.post("/",(req,res)=>{
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


router.delete(":id",(req,res)=>{
    let id = req.params.id;
    for(let i=0;i<blogs.length;i++){
        if(blogs[i].id==id){
            blogs.splice(i,1);
            break;
        }
    }
    res.json(blogs);
})
router.delete("/title/:title",(req,res)=>{
    let title = req.body.title;
    let newblogs = blogs.filter((blog)=>blog.title!=title);
    blogs=newblogs;
    res.json(blogs);

})

router.put("/:id",(req,res)=>{
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

router.patch("/:id",(req,res)=>{
    let id = req.params.id;
    for(let i =0;i<blogs.length;i++){
        if(blogs[i].id==id){
            blogs[i]={...blogs[i],...req.body};
            break;
        }
    }
    res.json(blogs);
})

module.exports=router;
