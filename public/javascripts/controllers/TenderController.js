class TenderController {
    static getTenders(db) {
        const sql = "SELECT *, DATE_FORMAT(startDate, '%d.%m.%Y') AS f_startDate, DATE_FORMAT(endDate, '%d.%m.%Y') AS f_endDate FROM tenders WHERE CONCAT(endDate, ' ', endTime) > NOW() ORDER BY startDate, startTime, endDate, endTime";
        return new Promise((resolve, reject) => {
            db.query(sql, (err, data) => {
                if (err) return reject(err);
                resolve(data);
            });
        });
    }

    static getCancelledTenders(db) {
        const sql = "SELECT *, DATE_FORMAT(startDate, '%d.%m.%Y') AS f_startDate, DATE_FORMAT(endDate, '%d.%m.%Y') AS f_endDate FROM tenders WHERE CONCAT(endDate, ' ', endTime) <= NOW() ORDER BY startDate, startTime, endDate, endTime";
        return new Promise((resolve, reject) => {
            db.query(sql, (err, data) => {
                if (err) return reject(err);
                resolve(data);
            });
        });
    }

    static getTenderById(db, selected_id) {
        const sql = "SELECT *, DATE_FORMAT(startDate, '%d.%m.%Y') AS f_startDate, DATE_FORMAT(endDate, '%d.%m.%Y') AS f_endDate, CONCAT(startDate, ' ', startTime) <= NOW() AND CONCAT(endDate, ' ', endTime) > NOW()AS is_active FROM tenders WHERE id = " + selected_id;
        return new Promise((resolve, reject) => {
            db.query(sql, (err, data) => {
                if (err) return reject(err);
                resolve(data);
            });
        });
    }

    static addTender(db, tender){
        if (Object.values(tender).some(value => value === "")) {
            return -1;
        }
        else if (tender.price < 0){
            return -2;
        }
        else if (tender.startDate + tender.startTime >= tender.endData + tender.endTime){
            return -3;
        }
        let sql = `INSERT INTO tenders (subjectName, institution, description, startDate, startTime, endDate, endTime, maxPrice, submissionDatetime) VALUES ("${tender.name}", "${tender.institution}", "${tender.desrc}", "${tender.startDate}", "${tender.startTime}", "${tender.endData}", "${tender.endTime}", ${tender.price}, NOW())`;
        console.log(sql);
        return new Promise((resolve, reject) => {
            db.query(sql, (err, tender) => {
                if (err) return reject(err);
                resolve(tender);
            });
        });
    }
}

module.exports = TenderController;