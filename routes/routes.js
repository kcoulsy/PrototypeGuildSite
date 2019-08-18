const express = require('express');

const { Progress, Recruitment } = require('../models');
const Apply = require('./Apply');
const User = require('./User');
const Player = require('./Player');
const Schema = require('./Schema');

const router = express.Router();

router.post('/user/register', User.register);
router.post('/user/login', User.login);
router.delete('/user/logout', User.logout);
router.get('/user/me', User.me);

// TODO add authorization
router.post('/players/import', Player.import);
router.get('/players/get', Player.get);

router.get('/schema/get', Schema.get);
router.get('/schema/:id', Schema.get);
router.post('/schema/create', Schema.create);
router.patch('/schema/update', Schema.update);

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
