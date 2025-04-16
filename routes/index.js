var express = require("express");
var router = express.Router();
const mysql = require("mysql2");
const Tender = require("../public/javascripts/models/Tender")
const TenderController = require("../public/javascripts/controllers/TenderController")
const Offer = require("../public/javascripts/models/Offer")
const OfferController = require("../public/javascripts/controllers/OfferController")

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

router.get("/actual-tenders/details/:id/send-offer", async function(req, res, next) {
  try {
    const id = req.params.id;
    const data = await TenderController.getTenderById(db, id);
    res.render("send-offer", { tenders: data , tenderId : id});
  } catch (err) {
    next(err);
  }
});

router.post("/actual-tenders/details/:id/send-offer/execute", async function(req, res, next) {
  const tenderId = req.params.id;
  const offer = new Offer(tenderId,
      req.body.name,
      req.body.price);
  const insertingResult = OfferController.addOffer(db, offer, tenderId);
  if (insertingResult === -1){
    res.render("notification", { notification : "Błąd - puste pola formularza podczas składania oferty!!!"});
  }
  else {
    const data = await TenderController.getTenderById(db, tenderId);
    res.render("actual-tender-details", { tenders: data });
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

router.get("/cancelled-tenders/details/:id", async function(req, res, next) {
  try {
    const id = req.params.id;
    const data = await TenderController.getTenderById(db, id);
    const offers = await OfferController.getOffersByTenderId(db, id);
    res.render("cancelled-tender-details", { tenders: data, offers : offers, number : offers.length });
  } catch (err) {
    next(err);
  }
});

router.get("/add-tender", function(req, res, next) {
  res.render("add-tender");
});

router.post("/add-tender/execute", function (req, res, next){
  const tender = new Tender(req.body.name,
      req.body.institution,
      req.body.descr,
      req.body.startDate,
      req.body.startTime,
      req.body.endDate,
      req.body.endTime,
      req.body.price);
  const insertingResult = TenderController.addTender(db, tender);
  if (insertingResult === -1)
    res.render("notification", { notification : "Błąd - puste pola formularza podczas dodawania przetargu!!!"});
  else
    res.render("add-tender");
});

module.exports = router;
