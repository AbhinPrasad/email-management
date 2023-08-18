const express = require('express');
const router = express.Router();
const url = require('../../constants/urlConstants')

router.post(url.baseUrl + '/send-email', async(req,res)=>{})

module.exports = router;