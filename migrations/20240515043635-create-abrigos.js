'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('abrigos', {
      codigo: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false,
        primaryKey: true
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
    await queryInterface.dropTable('abrigos');
  }
};
