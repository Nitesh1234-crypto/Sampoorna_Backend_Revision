const express = require("express");
const { postAddPost,deletePost, getAllPosts } = require("../controller/posts.controller");
const {isLogin} = require("../middleare/auth");
const {isAllowed} = require("../middleare/post.authorise.middleware")
const router = express.Router();



router.post("/",isLogin,postAddPost)
router.delete("/:id",isLogin,isAllowed,deletePost)
router.get("/",isLogin,getAllPosts)




module.exports=router;