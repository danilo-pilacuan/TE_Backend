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
     return queryInterface.bulkInsert('Inventarios', [
      {
        numInventario: 'I0001',
        fechaIngreso: new Date(2021,2,21),
        idEquipo: 1,
        descripcion: 'Ingreso laptop',
        observaciones: 'ninguna',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numInventario: 'I0002',
        fechaIngreso: new Date(2021,2,22),
        idEquipo: 2,
        descripcion: 'Ingreso PC Escritorio',
        observaciones: 'ninguna',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numInventario: 'I0003',
        fechaIngreso: new Date(2021,2,25),
        idEquipo: 3,
        descripcion: 'Ingreso Impresora',
        observaciones: 'Cambiar tinta',
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
