'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', {
      codigo: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false,
        primaryKey: true
      },
      codAbrigo: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false,
        references: {
          model: 'abrigos',
          key: 'codigo'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      nome: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
      },
      endereco: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
      },
      telefone: {
        type: Sequelize.DataTypes.STRING(11),
        allowNull: false
      },
      cpf: {
        type: Sequelize.DataTypes.INTEGER(11),
        allowNull: false
      },
      senha: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
      },
      obs: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false 
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false 
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios');
  }
};
