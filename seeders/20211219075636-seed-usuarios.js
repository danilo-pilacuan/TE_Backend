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
    return queryInterface.bulkInsert('Usuarios', [
    {
      nombre: 'Administrador',
      correo: 'admin@gadmana.ec',
      contrasenia: '123456',
      tipoUsuario: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Tecnico1',
      correo: 'tecnico1@gadmana.ec',
      contrasenia: '123456',
      tipoUsuario: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Tecnico2',
      correo: 'tecnico2@gadmana.ec',
      contrasenia: '123456',
      tipoUsuario: 2,
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
     return queryInterface.bulkDelete('Usuarios', null, {});
  }
};
