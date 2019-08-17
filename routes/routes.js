const express = require('express');

const { Progress, Recruitment } = require('../models');
const Apply = require('./Apply');
const User = require('./User');

const router = express.Router();

router.post('/user/register', User.register);
router.post('/user/login', User.login);
router.delete('/user/logout', User.logout);
router.get('/user/me', User.me);



router.post('/apply/submit', Apply.submit);

router.get('/progress', (req, res) => {
    Progress.findAll()
        .then(progress => {
            res.send(progress);
        })
        .catch(e => res.status(400).send());
});

router.get('/recruitment', (req, res) => {
    Recruitment.findAll()
        .then(recruitment => {
            res.send(recruitment);
        })
        .catch(e => res.status(400).send());
});

module.exports = router;
