const assert = require('assert');
const Postgres = require('../db/strategies/postgres');
const Context = require('../db/strategies/base/contextStrategy');

const context = new Context(new Postgres());
const MOCK_HEROI_CADASTRAR = {
    nome: 'Gavião Negro',
    poder: 'Flexas'
};

let db = null;

describe('Postgres Strategy', function() {
    this.timeout(Infinity);
    this.beforeAll(async function() {
        db = await context.connect();
    });

    it('PostgresSQL Conection', async function() {
        const result = await context.isConnected();
        assert.equal(result, true);
    });

    it.only('Postgres [Cadastrar]', async function() {
        const result = await context.create(MOCK_HEROI_CADASTRAR);
        delete result.id;
        assert.deepEqual(result, MOCK_HEROI_CADASTRAR);
    });
})