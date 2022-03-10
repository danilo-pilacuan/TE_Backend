'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('FichaMantenimientos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      numFormulario: {
        type: Sequelize.STRING
      },
      fechaFicha: {
        type: Sequelize.DATE
      },
      idTurnoMantenimiento: {
        type: Sequelize.INTEGER,        
        references:{
          model: 'TurnoMantenimientos',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
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
      informe: {
        type: Sequelize.STRING
      },
      revision: {
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
    await queryInterface.dropTable('FichaMantenimientos');
  }
};