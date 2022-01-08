var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/suma/:num1/:num2', function(req, res, next) {
  var num1 = parseInt(req.params.num1);
  var num2 = parseInt(req.params.num2);

  var suma = num1 + num2;

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ result: suma }));
});

router.post('/count-words', function(req, res, next) {
  var words = req.body.text.split(' ');
  let count = 0;

  words.forEach(function(val){
    if (val == req.body.find) {
      count += 1;
    }
  });

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ result: count }));
});

module.exports = router;
