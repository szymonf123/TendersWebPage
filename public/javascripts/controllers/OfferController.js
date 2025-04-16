class OfferController {
    static addOffer(db, offer){
        /*if (Object.values(data).some(value => value === "")) {
            res.render("notification", {
                title: "Kinomaniak",
                notification: "Błąd dodawania filmu. Wymagane pola nie zostały uzupełnione."
            });
            return;
        }*/
        let sql = `INSERT INTO offers (tender_id, bidder_name, value, submission_datetime) VALUES (${offer.tenderId}, "${offer.bidderName}", ${offer.price}, NOW())`;
        console.log(sql);
        return new Promise((resolve, reject) => {
            db.query(sql, (err, tender) => {
                if (err) return reject(err);
                resolve(tender);
            });
        });
    }
}

module.exports = OfferController;