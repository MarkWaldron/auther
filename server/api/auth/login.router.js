'use strict';

var router = require('express').Router(),
	_ = require('lodash');

var HttpError = require('../../utils/HttpError');

var User = require('../users/user.model');

router.post('/', function(req, res, next){
		User.findOne({email: req.body.email})
		.then(function(user){
			if(user.password === req.body.password){
				req.session.userId = user._id;
				console.log(req.session, "REQ SESS")
				res.status(200).send();
			} else {
				res.status(401).send();
			}
		})
		.then(null, function(err){
			console.log(err);
			res.status(401).send();
		});
});


module.exports = router;


//userId: 'NJfwr0Mrx'