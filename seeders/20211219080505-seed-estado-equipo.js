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
     return queryInterface.bulkInsert('EstadoEquipos', [
      {
        descripcion: 'Activo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Inactivo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Baja',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'En revisión',
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
