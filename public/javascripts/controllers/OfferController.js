class OfferController {
    static getOffersByTenderId(db, tenderId){
        const sql = `SELECT * FROM offers INNER JOIN tenders ON offers.tender_id = tenders.id WHERE tender_id = ${tenderId} AND value <= max_price ORDER BY value`;
        return new Promise((resolve, reject) => {
            db.query(sql, (err, data) => {
                if (err) return reject(err);
                resolve(data);
            });
        });
    }
    static addOffer(db, offer){
        if (Object.values(offer).some(value => value === "")) {
            return -1;
        }

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