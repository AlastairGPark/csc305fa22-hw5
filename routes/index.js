var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { postdata: undefined });
});

router.post('/', function(req, res, next) {
  console.log(JSON.stringify(req.body));
  res.render('index', { postdata: req.body });
});

module.exports = router;
