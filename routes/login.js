var express = require('express');
var router = express.Router();
var path = require('path');
var dbConnection = require('../db')
var session = require('express-session');
const cookieParser = require('cookie-parser');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(cookieParser());

router.use(session({
  secret: 'thisIsSecretKey',
  resave: false,
  saveUninitialized: false
}));


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('/app/views/login.pug');
});

router.post('/' , function(req,res,next) {

  var query = 'SELECT * FROM Users WHERE userName = ?'

  dbConnection.query(query ,[req.body.username],async function(err , result) {
    if(err) {
      res.status(501).send('Server error' + err)
    }
    if(req.body.password === result[0].userPassword) {
      res.send(result);
    } else {
      console.log(req.body.password + ' AND ' + result[0].userPassword)
      res.sendStatus(401)
    }
  })
});


module.exports = router;
