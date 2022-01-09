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
        nombre: 'Disco duro',
        descripcion: 'Seagate',
        valor: '500gb',
        idEquipo: 1,
        idTipoCaracteristicaEquipo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Memoria RAM',
        descripcion: 'Samsung',
        valor: 'ddr3',
        idEquipo: 1,
        idTipoCaracteristicaEquipo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Monitor',
        descripcion: 'Samsung',
        valor: 'NW2243',
        idEquipo: 2,
        idTipoCaracteristicaEquipo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Licencia',
        descripcion: 'Windows',
        valor: 'Si',
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
