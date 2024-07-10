var express = require('express');
var router = express.Router();
var path = require('path');

/* GET users listing. */
router.get('/', function(req, res, next) {
    var loginPath = __dirname + '/../views/login.html';
    console.log('file path: ' + loginPath);
  res.sendFile('/app/views/login.html');
});

module.exports = router;
