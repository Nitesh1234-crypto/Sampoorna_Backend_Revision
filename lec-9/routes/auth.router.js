const express = require("express");
const { postLoginUser, postRegisterUser } = require("../controller/auth.controller");
const router = express.Router();

router.post("/login",postLoginUser)
router.post("/register",postRegisterUser)






module.exports = router;