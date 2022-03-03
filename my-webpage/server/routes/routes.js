var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
//var Expense = require('../../models/Expense');

router.route('/', function(req, res){
  res.render('index')
  console.log("redered");
});

module.exports = router;