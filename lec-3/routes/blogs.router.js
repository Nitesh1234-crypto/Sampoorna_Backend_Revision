const express = require("express");
const router = express.Router();
const {getAllblogs,getOneBlog,postOneBlog,deleteOneBlog,deleteBlogbyTitle,putBlog,patchBlog} = require("../controller/blogs.controller")

router.get("/",getAllblogs);
router.get("/:id",getOneBlog);
router.post("/",postOneBlog)
router.delete("/:id",deleteOneBlog)
router.delete("/title/:title",deleteBlogbyTitle)
router.put("/:id",putBlog)
router.patch("/:id",patchBlog)

module.exports=router;
