var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function(req,res, next) {
	/*Get All User table data*/
	models.User.findAll().then(function(users){
		res.render(
			'index', {
			 title: 'Contacts',
			 users: users
			}
		);
	});
  
});

module.exports = router;
