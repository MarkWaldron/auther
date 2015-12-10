'use strict';

var router = require('express').Router();

router.use('/signup', require('./signup.router'));

router.use('/login', require('./login.router'));

module.exports = router;
