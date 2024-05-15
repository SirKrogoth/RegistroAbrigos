'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tipoHistoricos', {
      codigo: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false,
        primaryKey: true
      },
      descricao: {
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
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tipoHistoricos');
  }
};
