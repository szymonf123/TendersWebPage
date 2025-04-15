class Tender {
    constructor(name, institution, descr, startDate, startTime, endData, endTime, price) {
        this.name = name;
        this.institution = institution;
        this.desrc = descr;
        this.startDate = startDate;
        this.startTime = startTime;
        this.endData = endData;
        this.endTime = endTime;
        this.price = price;
    }
}

module.exports = Tender;