'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TurnoMantenimientos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      numTurno: {
        type: Sequelize.INTEGER
      },
      atendido: {
        type: Sequelize.INTEGER
      },
      fechaGeneracionTurno: {
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
      idResultadoKnn: {
        type: Sequelize.INTEGER,
        references:{
          model: 'ResultadosKnns',
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
    await queryInterface.dropTable('TurnoMantenimientos');
  }
};