'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('abrigados', {
      codigo: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false,
        primaryKey: true
      },
      codSala: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: true,
        default: null,
        references: {
          model: 'salas',
          key: 'codigo'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      nome: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
      },
      nascimento: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      },
      cpf: {
        type: Sequelize.DataTypes.STRING(11),
        allowNull: false
      },
      obs: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false 
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false 
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('abrigados');
  }
};
