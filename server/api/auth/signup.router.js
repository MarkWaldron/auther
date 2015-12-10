'use strict';

var router = require('express').Router(),
	_ = require('lodash');

var HttpError = require('../../utils/HttpError');

var User = require('../users/user.model')

router.post('/', function(req, res, next){
		User.create(req.body)
		.then(function (user) {
			res.status(200).json(user);
		})
		.then(null, function(err){
	    res.status(401).send();
	  });
})

module.exports = router;
