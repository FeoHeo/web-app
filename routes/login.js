var express = require('express');
var router = express.Router();
var path = require('path');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('/app/views/login.pug');
});

router.post('/' , function(req,res,next) {
  const sampleJson = {
    "username": "sampleName",
    "userId": 1
  }

  console.log(req.body[1].username);
  res.send(req.body[0].username);
});


module.exports = router;
