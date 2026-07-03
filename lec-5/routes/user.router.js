const express = require("express");
const { postRegisterUser, deleteOneUserById } = require("../controller/user.controller");
const router = express.Router();
//users
// router.use(middleware_Name)
router.post("/register",postRegisterUser);
router.delete("/deletebyId/:id",deleteOneUserById)



module.exports=router;