const express = require('express');
const { createUser, loginUser, logoutUser } = require('../controllers/user.controller');
const userRouter = express.Router();

// user Login Route 
userRouter.post('/login', loginUser)

// user Sign Route
userRouter.post('/signup', createUser)

// user Logout Route
userRouter.get('/logout', logoutUser)
module.exports = userRouter
