'use strict';

var router = require('express').Router(),
	_ = require('lodash');

var HttpError = require('../../utils/HttpError');

var User = require('../users/user.model');

var passport = require('passport')

// Google authentication and login
router.get('/', passport.authenticate('google', { scope : 'email '}));

// handle the callback after google has authenticated the user
router.get('/callback',
  passport.authenticate('google', {
    successRedirect : '/home',
    failureRedirect : '/'
  }));

module.exports = router;
