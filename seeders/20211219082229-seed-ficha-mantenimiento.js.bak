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
     return queryInterface.bulkInsert('FichaMantenimientos', [
      {
        numFormulario: 'F0001',
        idFuncionario:1,
        idEquipo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numFormulario: 'F0002',
        idFuncionario:2,
        idEquipo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numFormulario: 'F0003',
        idFuncionario:3,
        idEquipo: 3,
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
