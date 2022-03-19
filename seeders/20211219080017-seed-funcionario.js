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
     return queryInterface.bulkInsert('Funcionarios', [
      {
        nombres: 'Pablo Anibal',
        apellidos: 'Lopez Vera',
        cargo: 'Contador',
        idDependencia: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombres: 'Juan Alberto',
        apellidos: 'Martinez Alcivar',
        cargo: 'Secretario',
        idDependencia: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombres: 'Juan Manuel',
        apellidos: 'Perez Guerra',
        cargo: 'Ingeniero',
        idDependencia: 2,
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
