'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Equipos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      direccionIP: {
        type: Sequelize.STRING
      },
      direccionMAC: {
        type: Sequelize.STRING
      },
      idTipoEquipo: {
        type: Sequelize.INTEGER,
        references:{
          model: 'TipoEquipos',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      idFuncionario: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Funcionarios',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
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
    await queryInterface.dropTable('Equipos');
  }
};