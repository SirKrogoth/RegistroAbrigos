import sequelize, { Model, Optional } from 'sequelize';
import iUsuarios from './interfaces/iUsuarios';
import database from '../../database/database';

interface iUsuariosCreationAttributes extends Optional<iUsuarios, 'codigo'>{}
export interface iUsuariosModel extends Model<iUsuarios, iUsuariosCreationAttributes>, iUsuarios{}

const usuarios = database.define<iUsuariosModel>('usuarios', {
    codigo: {
        type: sequelize.STRING(255),
        primaryKey: true,
        allowNull: false
    },
    codAbrigo: {
        type: sequelize.STRING(255),
        allowNull: false,
        references: {
            model: 'abrigos',
            key: 'codigo'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
        type: sequelize.STRING(255),
        allowNull: false
    },
    cpf: {
        type: sequelize.STRING(11),
        allowNull: false
    },
    senha: {
        type: sequelize.STRING(255),
        allowNull: false
    },
    obs: {
        type: sequelize.STRING(255),
        allowNull: false        
    }
});

export default usuarios;