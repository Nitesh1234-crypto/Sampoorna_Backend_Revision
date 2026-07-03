let blogs=[
    {id:1,title:"dhfsdfs",desc:"dsfdsfdsfs"},
]
module.exports.getAllblogs = (req,res)=>{
    res.json(blogs);
}
module.exports.getOneBlog=(req,res)=>{
    let id = req.params.id;
    console.log(id);
    let blog=null;
    for(let i =0;i<blogs.length;i++){
        if(blogs[i].id==id){
            blog=blogs[i];
        }

    }
    res.json(blog);
}
module.exports.postOneBlog =(req,res)=>{
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
}

module.exports.deleteOneBlog=(req,res)=>{
    let id = req.params.id;
    for(let i=0;i<blogs.length;i++){
        if(blogs[i].id==id){
            blogs.splice(i,1);
            break;
        }
    }
    res.json(blogs);
}

module.exports.deleteBlogbyTitle=(req,res)=>{
    let title = req.body.title;
    let newblogs = blogs.filter((blog)=>blog.title!=title);
    blogs=newblogs;
    res.json(blogs);

}
module.exports.putBlog = (req,res)=>{
    let id = req.params.id;
    for(let i =0;i<blogs.length;i++){
        if(blogs[i].id==id){
            blogs[i]={id:id,...req.body};
            //
            break;
        }
    }
    res.json(blogs);

}
module.exports.patchBlog = (req,res)=>{
    let id = req.params.id;
    for(let i =0;i<blogs.length;i++){
        if(blogs[i].id==id){
            blogs[i]={...blogs[i],...req.body};
            break;
        }
    }
    res.json(blogs);
}