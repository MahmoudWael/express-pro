const express = require('express');
const router = express.Router();
const models = require('../models');

//Middelware
function Auth(req, res, next) {
  var name = req.query.n
  if (name === "Mahmoud") {
    console.log('Welcome back, ' + name + "!");
    next()
  } else {
    res.status(403).json({
      'msg': 'Forbidden'
    })
  }
}

//router.use(Auth);

var findUserByUsername = function (username, callback) {
  models.User.findAll({where:{name: username}}).then(function(users) {
    if(Object.keys(users).length < 1)
      return callback(new Error('The user with username '+ username +' was not found!'));
    return callback(null, users)
  });
}

router.get('/', function(req, res) {
  var name = req.query.n;
  var account = {
    name: name,
    msg: "this is the account api",
    link: "http://localhost"
  };
  res.json(account);
})

router.get('/users', function(req, res) {
  models.User.findAll({where:{id:{$gte: 1}}}).then(function(users) {
    res.json(users);
  });
})

router.get('/users/:username', function (req, res, next) {
  var username = req.params.username;
  findUserByUsername(username, function (err, users) {
    if(err) return next(err);
    return res.json(users);
  })
})

module.exports = router;
