import { Sequelize } from 'sequelize';

const dbName = process.env.DB_NAME!;
const dbUser = process.env.DB_USER!;
const dbHost = process.env.DB_HOST;
const dbPass = process.env.DB_PASSWORD;

const sequelize = new Sequelize(dbName, dbUser, dbPass, {
    dialect: 'mysql',
    host: dbHost,    
    define: {
        charset: 'utf8',
        collate: 'utf8_general_ci',
    },
    logging: false
});

export default sequelize;