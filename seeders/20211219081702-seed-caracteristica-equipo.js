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
     return queryInterface.bulkInsert('CaracteristicaEquipos', [
      {
        descripcion: 'Seagate',
        idEquipo: 1,
        idTipoCaracteristicaEquipo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Samsung',
        idEquipo: 1,
        idTipoCaracteristicaEquipo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Samsung',
        idEquipo: 2,
        idTipoCaracteristicaEquipo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Windows',
        idEquipo: 2,
        idTipoCaracteristicaEquipo: 4,
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
