'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('abrigados', 'codAbrigo', {
      type: Sequelize.DataTypes.STRING(255),
      allowNull: false,
      references: {
        model: 'abrigos',
        key: 'codigo'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('abrigados', 'codAbrigo');
  }
};
