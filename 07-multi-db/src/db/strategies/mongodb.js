const ICrud = require('./interfaces/ICrud');

class MongoDB extends ICrud {
    constructor() {
        super();
    }

    create(item) {
        console.log("Inserindo no MongoDB", item);
    }
}

module.exports = MongoDB;