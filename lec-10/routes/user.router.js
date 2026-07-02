const express = require("express");
const { isLogin } = require("../middleare/auth");
const { getUserProfile } = require("../controller/user.controller");
const router = express.Router();

router.get("/profile",isLogin,getUserProfile)



module.exports=router;