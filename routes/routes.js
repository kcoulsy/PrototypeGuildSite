const express = require('express');

const Apply = require('./Apply');

const router = express.Router();

router.post('/apply/submit', Apply.submit);

module.exports = router;