const express = require("express");
const userController = require("../controller/user.controller");
const userRouter = express.Router();

userRouter.get('/user',userController.getUser);
userRouter.get('/user/:id',userController.getUserById);
userRouter.post('/user',userController.addUser);
userRouter.put('/user/:id',userController.updateUser);
userRouter.delete('/user/:id',userController.removeUser);
userRouter.post('/login',userController.login);
userRouter.post('/forgot',userController.forgot);
userRouter.post('/sendEmail',userController.sendEmail);
userRouter.post('/resetPwd',userController.resetPwd);


module.exports = userRouter;