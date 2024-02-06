const express = require('express');
const { createUser, loginUser,logoutUser } = require('../controllers/user.controller');
const userRouter = express.Router();

// Singup route
userRouter.post('/signup', createUser)
// Login Route
userRouter.post('/login', loginUser)
// logout route
userRouter.get('/logout', logoutUser)
module.exports = userRouter
