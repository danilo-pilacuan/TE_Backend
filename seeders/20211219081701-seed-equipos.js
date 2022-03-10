'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     return queryInterface.bulkInsert('Equipos', [
      {
        numInventario: 'I0001',
        descripcion: 'PC Escritorio',
        direccionIP: '10.10.10.102',
        direccionMAC: '00:22:4D:80:08:61',
        observaciones: 'En buen estado',
        idEstadoEquipo: 1,
        idEstadoRendimiento: 1,
        idTipoEquipo: 1,
        idFuncionario: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numInventario: 'I0002',
        descripcion: 'PC Escritorio',
        direccionIP: '10.10.10.104',
        direccionMAC: '00:22:4D:80:08:88',
        observaciones: 'En buen estado',
        idEstadoEquipo: 1,
        idEstadoRendimiento: 2,
        idTipoEquipo: 1,
        idFuncionario: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numInventario: 'I0003',
        descripcion: 'Laptop',
        direccionIP: '10.10.10.109',
        direccionMAC: '00:22:4D:80:08:AA',
        observaciones: 'Posibles problemas de recalentamiento',
        idEstadoEquipo: 3,
        idEstadoRendimiento: 3,
        idTipoEquipo: 2,
        idFuncionario: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numInventario: 'I0004',
        descripcion: 'Impresora',
        direccionIP: '10.10.10.205',
        direccionMAC: '00:22:4D:80:08:FF',
        observaciones: 'Bajo nivel de tinta',
        idEstadoEquipo: 2,
        idEstadoRendimiento: 0,
        idTipoEquipo: 3,
        idFuncionario: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
