import app from './app';
import database from './database/database';

(async () => {
    try{
        const port = parseInt(`${process.env.PORT}`);

        await database.sync();
        console.log('Conectado ao banco de dados ' + process.env.DB_NAME);

        app.listen(port, () => {
            console.log('Programa executando na porta ' + port);
        });
    }
    catch(error){
        console.error('Não foi possível conectar na base de dados.\nMensagem: ' + error);
    }
})();