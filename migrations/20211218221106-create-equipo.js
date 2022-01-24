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
      numInventario: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
      direccionIP: {
        type: Sequelize.STRING
      },
      direccionMAC: {
        type: Sequelize.STRING
      },
      observaciones: {
        type: Sequelize.STRING
      },
      idEstadoEquipo: {
        type: Sequelize.INTEGER,
        references: {
          model: 'EstadoEquipos',
          key: 'id' 
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      idTipoEquipo: {
        type: Sequelize.INTEGER,
        references: {
          model: 'TipoEquipos',
          key: 'id' 
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      idFuncionario: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Funcionarios',
          key: 'id' 
        },
        onDelete: 'SET NULL',
        onUpdate: 'SET NULL'
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