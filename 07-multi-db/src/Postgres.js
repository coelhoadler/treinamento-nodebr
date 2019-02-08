const ICrud = require('./ICrud');

class Postgres extends ICrud {
    constructor() {
        super();
    }
    
    create(item) {
        console.log("Inserindo no Postgres", item);
    }
}

module.exports = Postgres;