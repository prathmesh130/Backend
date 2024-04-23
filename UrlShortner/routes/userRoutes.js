const express = require('express');
const { createUser, loginUser,logoutUser } = require('../controllers/user.controller');
// create user router
const userRouter = express.Router();

// Singup route
userRouter.post('/signup', createUser)
// Login Route
userRouter.post('/login', loginUser)
// logout route
userRouter.get('/logout', logoutUser)
// userRouter module export
module.exports = userRouter
