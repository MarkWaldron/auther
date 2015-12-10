'use strict';

var router = require('express').Router();

router.use('/logout', require('./logout.router'));

router.use('/signup', require('./signup.router'));

router.use('/login', require('./login.router'));

module.exports = router;
