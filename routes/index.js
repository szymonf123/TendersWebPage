var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/actual-tenders', function(req, res, next) {
  var data = [
    {Name: "Przetarg 1",
    StartDate: "xxxxxx",
    EndDate: "yyyyyyy",
    StartTime: "zzzzz",
    EndTime: "wwwwww"}
  ]
  res.render('actual-tenders', {tenders : data});
});

router.get('/cancelled-tenders', function(req, res, next) {
  res.render('cancelled-tenders');
});

router.get('/add-tender', function(req, res, next) {
  res.render('add-tender');
});

router.post('/add-tender/execute', function (req, res, next){
  res.render('add-tender');
});

module.exports = router;
