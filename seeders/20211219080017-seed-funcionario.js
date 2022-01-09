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
        cedula: '1724978176',
        nombres: 'Pablo Anibal',
        apellidos: 'Lopez Vera',
        telefono: '0981717239',
        direccion: 'la mana',
        idDependencia: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cedula: '1724978177',
        nombres: 'Juan Alberto',
        apellidos: 'Martinez Alcivar',
        telefono: '0987474321',
        direccion: 'la mana',
        idDependencia: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cedula: '1724978178',
        nombres: 'Juan Manuel',
        apellidos: 'Perez Guerra',
        telefono: '0987474356',
        direccion: 'la mana',
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
