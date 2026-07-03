const express = require("express");
const app = express();
const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');
app.get("/",(req,res)=>{
    res.render("home.hbs")
})
app.get("/oneBlog",(req,res)=>{
    //db query to fetch one blog
    
    res.render("blog.hbs",{
       title:"coding blogs" 
    })
})
app.get("/blog",(req,res)=>{
    //let blog = Blog.findById(id);
    let blog={title:"coding blocks",desc:"what is server side rendering",author:"Nitesh",
        blogImage:"https://static.vecteezy.com/system/resources/thumbnails/050/393/628/small/cute-curious-gray-and-white-kitten-in-a-long-shot-photo.jpg"
    }
    res.render("blog.hbs",{
        blog:blog
    })

})
//create an endpoint to display single post with propert post image, post like, post caption, post author
app.get("/allblogs",(req,res)=>{
    //let allblogs = await Blog.find();
    let allBlogs = [{title:"coding blocks",desc:"what is server side rendering",author:"Nitesh",
        blogImage:"https://static.vecteezy.com/system/resources/thumbnails/050/393/628/small/cute-curious-gray-and-white-kitten-in-a-long-shot-photo.jpg"
    },{title:"Backend",desc:"Csr vs Ssr",author:"Nitesh",
        blogImage:"https://png.pngtree.com/png-clipart/20250118/original/pngtree-golden-retriever-dog-pictures-png-image_20183713.png"
    },
    {
        title:"frotend",desc:"what is useEffect hook in react",
   
        blogImage:"https://media.newyorker.com/photos/59095bb86552fa0be682d9d0/master/w_1920,c_limit/Monkey-Selfie.jpg",
        author:"Nitesh"
    }   
]
res.render("allblogs.hbs",{
    blogs:allBlogs
})
})

app.get("/dashboard",(req,res)=>{
    let user ={name:"satyam",isAdmin:true};
    let dashboard = {users:"users",movies:"movies"};
    res.render("dashboard.hbs",{
        user:user,
        dashboard:dashboard
    })
})

app.listen(5555,()=>{
    console.log("server started");
})