const cmd = require('commander');
const Heroi = require('./heroi');
const db = require('./database');

async function main() {
    cmd
        .version('v1')
        .option('-n, --nome [value]', 'Nome do Heroi')
        .option('-p, --poder [value]', 'Poder do Heroi')
        .option('-i, --id [value]', 'ID do Heroi')

        .option('-c, --cadastrar', 'Cadastrar um Heroi')
        .option('-l, --listar', 'Listar Herois no arquivo')
        .option('-r, --remover [value]', 'Remove um heroi pelo ID')
        .option('-a, --atualizar [value]', 'Atualizar um heroi pelo id')
        .parse(process.argv);

        try {
            const heroi = new Heroi(cmd);

            if (cmd.cadastrar) {
                delete heroi.id;
                const resultado = await db.cadastrar(heroi);
                console.log('cadastrou?', resultado);
            }

            if (cmd.listar) {
                const resultado = await db.listar();
                console.log(resultado);
                return;
            }

            if (cmd.remover) {
                const resultado = await db.remover(heroi.id);
                if (!resultado) {
                    console.error('Não foi possível remover o heroi');
                    return;
                }
                console.log('Heroi removido com sucesso!');
            }

            if (cmd.atualizar) {
                const idParaAtualizar = parseInt(cmd.atualizar);
                const dado = JSON.stringify(heroi);
                const heroiAtualizar = JSON.parse(dado);

                const resultado = await db.atualizar(idParaAtualizar, heroiAtualizar);
                if (!resultado) {
                    console.error('Não foi possível atualizar o heroi.')
                    return;
                }
                console.log('Heroi atualizado com sucesso!');
                
            }
        } catch(error) {
            console.error('DEU RUIM', error);
        }
}

main();