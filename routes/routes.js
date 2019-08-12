const express = require('express');

const Apply = require('./Apply');

const router = express.Router();

router.post('/apply/submit', Apply.submit);

const prog = require('../constants/progress');

router.get('/progress', (req, res) => {
    res.send(prog);
});

router.get('/recruitment', (req, res) => {
    res.send({
        warrior: 1,
        paladin: 1,
        hunter: 1,
        druid: 1,
        rogue: 1,
        mage: 1,
        priest: 1,
        warlock: 1,
    });
});

module.exports = router;
