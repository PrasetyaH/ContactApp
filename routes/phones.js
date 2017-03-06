var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET phone number from user */
router.get('/', function(req, res, next) {
	
	console.log("GET PHONE LIST");
	//console.log("phonenumber1 : " + phonenumber1);
	req.redirect('/phones/create');
  /*  models.Phone.create({ username: req.body.username }).then(function() {

    res.redirect('/');
    console.log("CREATE NEW USER");
  });*/
});

/*POST phone number to Phones*/
router.get('/create', function(req, res, next) {
	var phonelist = req.query.phonelist;
	var userId = req.query.userId;
	var nmbLst = phonelist.split(",");
	//var numLngth = nmbLst.length;
	console.log("WELCOME TO PHONES CREATE");
	console.log("Phone num1 [0] : "+nmbLst[0]+"Phone num [1] : "+nmbLst[1]);
	console.log("User ID : " +userId);

  	///
  	models.Phone.bulkCreate([
	  { number: '123456789012', infonumber: 'TLKM',UserId :userId},
	  { number: '123456789013', infonumber: 'TLKM',UserId :userId}
	]).then(function() { // Notice: There are no arguments here, as of right now you'll have to...
	  //return User.findAll();
	}).then(function(numbers) {

	  //console.log(numbers) // ... in order to get the array of user objects
	  res.redirect('/');
	})
});

module.exports = router;