class OfferController {
    static getOffersByTenderId(db, tenderId){
        const sql = `SELECT * FROM offers INNER JOIN tenders ON offers.tenderId = tenders.id WHERE tenderId = ${tenderId} AND value <= maxPrice AND CONCAT(startDate, ' ', startTime) <= offers.submissionDatetime AND CONCAT(endDate, ' ', endTime) > offers.submissionDatetime ORDER BY value, tenders.submissionDatetime`;
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
        else if (offer.price < 0){
            return -2;
        }
        let sql = `INSERT INTO offers (tenderId, bidderName, value, submissionDatetime) VALUES (${offer.tenderId}, "${offer.bidderName}", ${offer.price}, NOW())`;
        return new Promise((resolve, reject) => {
            db.query(sql, (err, tender) => {
                if (err) return reject(err);
                resolve(tender);
            });
        });
    }
}

module.exports = OfferController;