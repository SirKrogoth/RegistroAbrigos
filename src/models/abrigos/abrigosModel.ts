import sequelize, { Model, Optional } from 'sequelize';
import iAbrigos from './interfaces/iAbrigos';
import database from '../../database/database';

interface iAbrigosCreationAttributes extends Optional<iAbrigos, 'codigo'>{}
export interface iAbrigosModel extends Model<iAbrigos, iAbrigosCreationAttributes>, iAbrigos{}

const abrigos = database.define<iAbrigosModel>('abrigos', {
    codigo: {
        type: sequelize.STRING(255),
        primaryKey: true,
        allowNull: false
    },
    nome: {
        type: sequelize.STRING(255),
        allowNull: false
    },
    endereco: {
        type: sequelize.STRING(255),
        allowNull: false
    },
    telefone: {
        type: sequelize.STRING(11),
        allowNull: false
    }
});

export default abrigos;