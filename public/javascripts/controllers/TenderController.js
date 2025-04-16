class TenderController {
    static getTenders(db) {
        const sql = "SELECT *, DATE_FORMAT(start_date, '%d.%m.%Y') AS f_start_date, DATE_FORMAT(end_date, '%d.%m.%Y') AS f_end_date FROM tenders WHERE CONCAT(end_date, ' ', end_time) > NOW() ORDER BY start_date, start_time, end_date, end_time";
        return new Promise((resolve, reject) => {
            db.query(sql, (err, data) => {
                if (err) return reject(err);
                resolve(data);
            });
        });
    }

    static getCancelledTenders(db) {
        const sql = "SELECT *, DATE_FORMAT(start_date, '%d.%m.%Y') AS f_start_date, DATE_FORMAT(end_date, '%d.%m.%Y') AS f_end_date FROM tenders WHERE CONCAT(end_date, ' ', end_time) <= NOW() ORDER BY start_date, start_time, end_date, end_time";
        return new Promise((resolve, reject) => {
            db.query(sql, (err, data) => {
                if (err) return reject(err);
                resolve(data);
            });
        });
    }

    static getTenderById(db, selected_id) {
        const sql = "SELECT *, DATE_FORMAT(start_date, '%d.%m.%Y') AS f_start_date, DATE_FORMAT(end_date, '%d.%m.%Y') AS f_end_date, CONCAT(start_date, ' ', start_time) <= NOW() AS is_active FROM tenders WHERE id = " + selected_id;
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
        let sql = `INSERT INTO tenders (subject_name, institution, description, start_date, start_time, end_date, end_time, max_price, submission_datetime) VALUES ("${tender.name}", "${tender.institution}", "${tender.desrc}", "${tender.startDate}", "${tender.startTime}", "${tender.endData}", "${tender.endTime}", ${tender.price}, NOW())`;
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