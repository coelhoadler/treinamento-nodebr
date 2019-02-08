const MongoDB = require('./MongoDB');
const Postgres = require('./Postgres');

class ContextStrategy {
    constructor(strategy) {
        this._database = strategy;
    }

    create(item) {
        return this._database.create(item);
    }
    read(query) {
        return this._database.read(query);
    }
    update(id, item) {
        return this._database.update(id, item);
    }
    delete(id) {
        return this._database.delete(id);
    }            
}

const contextMongo = new ContextStrategy(new MongoDB());
contextMongo.create(123);

const contextPostgres = new ContextStrategy(new Postgres());
contextPostgres.create(123);