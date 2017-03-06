var express = require('express');
var router = express.Router();
var models = require('../models');

/* POST new user */
router.post('/', function(req, res, next) {
	var flag = req.query.flag;
	var username = req.body.username;
	var phonenumber1 = req.body.phonenumber1;
	var phonenumber2 = req.body.phonenumber2;
	var phonelist = [phonenumber1,phonenumber2];
	console.log("FLAG   : "+flag+ "PhoneNumber1 : "+phonenumber1+ "PhoneNumber2 : "+phonenumber2 + "Phone List Length : "+ phonelist.length) ;
	//res.redirect('/phones/create?phonenumber1='+phonelist+'&phonenumber2='+phonenumber2);
   models.User.create({ username: req.body.username }).then(function(usr) {
   	var id = usr.id;
   	console.log("CREATE NEW USER");
   //	console.log("ID From username : "+username+ " is : "+id);
   	//res.redirect('/');
    res.redirect('/phones/create?phonelist='+phonelist+'&userId='+id);
    
  });
  /*Create multiple data*/
  /*	models.User.bulkCreate([
	  { username: 'barfooz', address: 'SBY' },
	  { username: 'foo', address: 'JKT' },
	  { username: 'bar', address: 'TBN' }
	]).then(function() { // Notice: There are no arguments here, as of right now you'll have to...
	  //return User.findAll();
	}).then(function(users) {

	  console.log(users) // ... in order to get the array of user objects
	  res.redirect('/');
	})*/
});

module.exports = router;
