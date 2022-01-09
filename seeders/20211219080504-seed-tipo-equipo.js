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
     return queryInterface.bulkInsert('TipoEquipos', [
      {
        descripcion: 'Laptop',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'PC escritorio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Impresora',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Teléfono IP',
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
