const express = require('express');
const { handleGenerateURL, handleGetAllURL } = require('../controllers/url');

const urlRouter = express.Router();

// handle get all URL 
urlRouter.get('/', handleGetAllURL)

// Post Route handleGenerateURL 
urlRouter.post('/', handleGenerateURL)

// export URL Router
module.exports = urlRouter
