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
     return queryInterface.bulkInsert('TipoCaracteristicaEquipos', [
      {
        descripcion: 'Disco Duro',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Memoria',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Monitor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Otros',
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
