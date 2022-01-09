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
     return queryInterface.bulkInsert('Metricas', [
      {
        fechaRecepcion: new Date(),
        idEquipo: 1,
        descripcion: 'Uso CPU',
        valor: Math.floor(Math.random() * 100).toString(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fechaRecepcion: new Date(),
        idEquipo: 1,
        descripcion: 'Uso RAM',
        valor: Math.floor(Math.random() * 100).toString(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fechaRecepcion: new Date(),
        idEquipo: 1,
        descripcion: 'Uso RAM',
        valor: Math.floor(Math.random() * 100).toString(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fechaRecepcion: new Date(),
        idEquipo: 1,
        descripcion: 'Uso RAM',
        valor: Math.floor(Math.random() * 100).toString(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fechaRecepcion: new Date(),
        idEquipo: 1,
        descripcion: 'Uso RAM',
        valor: Math.floor(Math.random() * 100).toString(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fechaRecepcion: new Date(),
        idEquipo: 1,
        descripcion: 'Uso RAM',
        valor: Math.floor(Math.random() * 100).toString(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fechaRecepcion: new Date(),
        idEquipo: 1,
        descripcion: 'Uso RAM',
        valor: Math.floor(Math.random() * 100).toString(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fechaRecepcion: new Date(),
        idEquipo: 1,
        descripcion: 'Uso RAM',
        valor: Math.floor(Math.random() * 100).toString(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fechaRecepcion: new Date(),
        idEquipo: 1,
        descripcion: 'Uso RAM',
        valor: Math.floor(Math.random() * 100).toString(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fechaRecepcion: new Date(),
        idEquipo: 1,
        descripcion: 'Uso RAM',
        valor: Math.floor(Math.random() * 100).toString(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fechaRecepcion: new Date(),
        idEquipo: 1,
        descripcion: 'Uso RAM',
        valor: Math.floor(Math.random() * 100).toString(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fechaRecepcion: new Date(),
        idEquipo: 1,
        descripcion: 'Uso RAM',
        valor: Math.floor(Math.random() * 100).toString(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fechaRecepcion: new Date(),
        idEquipo: 1,
        descripcion: 'Uso RAM',
        valor: Math.floor(Math.random() * 100).toString(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fechaRecepcion: new Date(),
        idEquipo: 1,
        descripcion: 'Uso RAM',
        valor: Math.floor(Math.random() * 100).toString(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fechaRecepcion: new Date(),
        idEquipo: 1,
        descripcion: 'Uso RAM',
        valor: Math.floor(Math.random() * 100).toString(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fechaRecepcion: new Date(),
        idEquipo: 1,
        descripcion: 'Uso RAM',
        valor: Math.floor(Math.random() * 100).toString(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fechaRecepcion: new Date(),
        idEquipo: 1,
        descripcion: 'Uso RAM',
        valor: Math.floor(Math.random() * 100).toString(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fechaRecepcion: new Date(),
        idEquipo: 1,
        descripcion: 'Uso RAM',
        valor: Math.floor(Math.random() * 100).toString(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fechaRecepcion: new Date(),
        idEquipo: 1,
        descripcion: 'Uso RAM',
        valor: Math.floor(Math.random() * 100).toString(),
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
