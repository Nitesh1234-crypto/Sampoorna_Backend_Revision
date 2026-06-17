const express = require("express");
const app = express()
app.use(express.json());
 //ratt lo abhi ke liye
 //to parse req.body
let blogs = [
        {id:1,title:"My title",
        desc:"coding mtlb coding blocks"},
        {id:2,title:"My title",
        desc:"coding mtlb coding blocks"},
        {id:3,title:"My title",
        desc:"coding mtlb coding blocks"},
        {id:4,title:"My title",
        desc:"coding mtlb coding blocks"}]
app.get('/', (req, res) => {
  res.send('Hello World')
})
app.get("/post",(req,res)=>{
    res.json({
        id:1,
        title:"My title",
        desc:"coding mtlb coding blocks"
    })

})
app.get("/blogs",(req,res)=>{
   
    res.json(blogs);

})
app.get("/getOneBlog",(req,res)=>{
    console.log(req.query);
    let id = req.query.id;
    console.log(id);
    //blogs =[{},{},{},{}]
    // blogs=[
    //     {},
    //     {},
    //     {},
    //     {}       
    // ]
    // // blogs[3]===>4
    let blog=null;
    for(let i =0;i<blogs.length;i++){
        if(blogs[i].id==id){
            blog=blogs[i];
        }

    }

    res.json(blog);

})

app.get("/threeparameter",(req,res)=>{
    console.log(req.query);
    let age = req.query.age;
    let isMarried = req.query.isMarried;
    let address = req.query.address;
    console.log(age,isMarried,address);

    res.send("recieved")
})

app.get("/home",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.get("/getonepost/:id",(req,res)=>{
    console.log(req.params);
    let id = req.params.id;
    console.log(id);
    res.send(id);
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







app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})