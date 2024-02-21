import express from "express";
import { auth } from "../middlewares/auth";
import { registerController, loginController, userController, logoutController } from "../controller";


export const userRouter = express.Router();

// user register route 
userRouter.post('/register', registerController.register)
// user login route
userRouter.post('/login', loginController.login)
// user logout route
userRouter.post('/logout', auth, logoutController.logout)
// user profile route
userRouter.get('/me', auth, userController.me)
