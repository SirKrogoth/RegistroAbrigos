'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('historicos', {
      codigo: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false,
        primaryKey: true
      },
      codAbrigo: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: true,
        references: {
          model: 'abrigos',
          key: 'codigo'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      codTipoHistorico: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false,
        references: {
          model: 'tipoHistoricos',
          key: 'codigo'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      descricao: {
        type: Sequelize.DataTypes.TEXT('long'),
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
    await queryInterface.dropTable('historicos');
  }
};
