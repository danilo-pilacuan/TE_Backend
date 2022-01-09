'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Inventarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      numInventario: {
        type: Sequelize.STRING
      },
      fechaIngreso: {
        type: Sequelize.DATE
      },
      idEquipo: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Equipos',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      descripcion: {
        type: Sequelize.STRING
      },
      observaciones: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Inventarios');
  }
};