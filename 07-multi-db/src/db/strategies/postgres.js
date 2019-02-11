const ICrud = require('./interfaces/ICrud');

class Postgres extends ICrud {
    constructor() {
        super();
    }
    
    create(item) {
        console.log("Inserindo no Postgres", item);
    }

    isConnected() {
        console.log("verificando conexão");
    }
}

module.exports = Postgres;