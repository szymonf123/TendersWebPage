class TenderController {
    static getTenders(db) {
        const sql = "SELECT *, DATE_FORMAT(start_date, '%d.%m.%Y') AS f_start_date, DATE_FORMAT(end_date, '%d.%m.%Y') AS f_end_date FROM tenders WHERE CONCAT(end_date, ' ', end_time) > NOW()";
        return new Promise((resolve, reject) => {
            db.query(sql, (err, data) => {
                if (err) return reject(err);
                resolve(data);
            });
        });
    }

    static getCancelledTenders(db) {
        const sql = "SELECT subject_name, DATE_FORMAT(start_date, '%d.%m.%Y') AS f_start_date, DATE_FORMAT(end_date, '%d.%m.%Y') AS f_end_date FROM tenders WHERE CONCAT(end_date, ' ', end_time) <= NOW()";
        return new Promise((resolve, reject) => {
            db.query(sql, (err, data) => {
                if (err) return reject(err);
                resolve(data);
            });
        });
    }

    static getTenderById(db, selected_id) {
        const sql = "SELECT *, DATE_FORMAT(start_date, '%d.%m.%Y') AS f_start_date, DATE_FORMAT(end_date, '%d.%m.%Y') AS f_end_date FROM tenders WHERE id = " + selected_id;
        return new Promise((resolve, reject) => {
            db.query(sql, (err, data) => {
                if (err) return reject(err);
                resolve(data);
            });
        });
    }
}

module.exports = TenderController;