'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('salas', {
      codigo: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false,
        primaryKey: true
      },
      numero: {
        type: Sequelize.DataTypes.INTEGER,
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
    await queryInterface.dropTable('salas');
  }
};
