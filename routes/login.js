var express = require('express');
var router = express.Router();
var path = require('path');
var dbConnection = require('../db')

// dbConnection.connect((err) => {
//   if(err) {
//     console.log('Database connection error: ' + err);
//     return;
//   }
//   console.log('Database connected');
// })


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('/app/views/login.pug');
});

router.post('/' , function(req,res,next) {

  dbConnection.query('SELECT * FROM Users;' ,async function(err , result) {
    if(err) {
      res.status(501).send('Server error' + err)
    }
    if(result) {
      console.log('Showing results')
      res.send(result);
    }
  })
  
  //res.sendStatus(500);
});


module.exports = router;
