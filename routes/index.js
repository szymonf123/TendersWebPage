var express = require("express");
var router = express.Router();
const mysql = require("mysql2");
const TenderController = require("../public/javascripts/controllers/TenderController")

const db = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "",
  database : "tendersdatabase"
});

db.connect(function (err){
  if (err)
    throw err;
});

router.get("/", function(req, res, next) {
  res.render("index");
});

router.get("/actual-tenders", async function(req, res, next) {
  try {
    const data = await TenderController.getTenders(db);
    console.log(data); // tu dane już są
    res.render("actual-tenders", { tenders: data });
  } catch (err) {
    next(err);
  }
});


router.get("/cancelled-tenders", function(req, res, next) {
  var data = [
    {Name: "Przetarg 1",
      StartDate: "xxxxxx",
      EndDate: "yyyyyyy",
      StartTime: "zzzzz",
      EndTime: "wwwwww"},
    {Name: "Przetarg 2",
      StartDate: "xxxxxx",
      EndDate: "yyyyyysssy",
      StartTime: "zzzzz",
      EndTime: "wwwwww"}
  ]
  res.render("cancelled-tenders", {tenders : data});
});

router.get("/add-tender", function(req, res, next) {
  res.render("add-tender");
});

router.post("/add-tender/execute", function (req, res, next){
  res.render("add-tender");
});

module.exports = router;
