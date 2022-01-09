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
        direccionIP: '10.10.10.102',
        direccionMAC: '00:22:4D:80:08:61',
        idTipoEquipo: 1,
        idFuncionario: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        direccionIP: '10.10.10.103',
        direccionMAC: '00:22:4D:80:08:61',
        idTipoEquipo: 2,
        idFuncionario: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        direccionIP: '10.10.10.205',
        direccionMAC: '00:22:4D:80:AA:C1',
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
