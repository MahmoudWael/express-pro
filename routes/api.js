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
  models.User.findAll({where:{id:{$gt: 1}}}).then(function(users) {
    res.json(users);
  });
})

module.exports = router;
