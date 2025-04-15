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
    res.render("actual-tenders", { tenders: data });
  } catch (err) {
    next(err);
  }
});

router.get("/actual-tenders/details/:id", async function(req, res, next) {
  try {
    const id = req.params.id;
    const data = await TenderController.getTenderById(db, id);
    res.render("actual-tender-details", { tenders: data });
  } catch (err) {
    next(err);
  }
});

router.get("/cancelled-tenders", async function(req, res, next) {
  try {
    const data = await TenderController.getCancelledTenders(db);
    res.render("cancelled-tenders", { tenders: data });
  } catch (err) {
    next(err);
  }
});

router.get("/add-tender", function(req, res, next) {
  res.render("add-tender");
});

router.post("/add-tender/execute", function (req, res, next){
  res.render("add-tender");
});

module.exports = router;
