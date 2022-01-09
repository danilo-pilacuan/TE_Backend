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
     return queryInterface.bulkInsert('Imagens', [
      {
        fechaSubida: new Date(2021,2,21),
        urlImagen: '../imgs/img1.png',
        idEquipo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fechaSubida: new Date(2021,2,22),
        urlImagen: '../imgs/img2.png',
        idEquipo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fechaSubida: new Date(2021,2,25),
        urlImagen: '../imgs/img1.png',
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
