var express = require('express');
var router = express.Router();
var request = require('sync-request');
var warning = "";

var cityModel = require('../models/cities') /* chargement du modele cities depuis cities.js*/
var userModel = require('../models/users') /* chargement du modele users depuis users.js*/

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/sign-up', async function(req, res) {
  console.log('req.body : ', req.body);
  var newUser = await userModel.findOne({email: req.body.userMail.toLowerCase()});
  console.log('newUser : ', newUser);
  if(newUser === null) {
    var newUser = new userModel({
      username: req.body.userName,
      email: req.body.userMail.toLowerCase(),
      password: req.body.userPsw
    });
    await newUser.save();
    var name = newUser.username;
    var id = newUser._id
    req.session.userSession = {name, id};
    res.redirect('/weather')
  } else {
    warning = 'This user already exists !';
    res.render('login', {warning: warning, userSession: req.session.userSession});
  }
});

router.post('/sign-in', async function(req, res) {
  console.log('req.body : ', req.body);
  var loginUser = await userModel.findOne({email: req.body.userMail});
  console.log('loginUser : ', loginUser);
  if(loginUser === null) {
    warning = "User doesn't exist !";
  } else {
      if (req.body.userPsw === loginUser.password) {
        var name = loginUser.username;
        var id = loginUser._id
        req.session.userSession = {name, id};
        res.redirect('/weather')
      } else {
        warning = 'Bad credentials !';
        res.render('login', {warning: warning, userSession: req.session.userSession});
      }

    };

});

router.get('/logout', function(req, res, next){
  console.log('req.query : ', req.query);
  req.session.userSession = {};
  res.redirect('/');
})


module.exports = router;
