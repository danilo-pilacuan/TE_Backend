'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Funcionario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Funcionario.belongsTo(models.Dependencia,{
        foreignKey: 'idDependencia',
        target_Key: 'id'
      }),
      Funcionario.hasMany(models.Equipo,{
        foreignKey: 'idFuncionario'
      })
    }
  };
  Funcionario.init({
    cedula: DataTypes.STRING,
    nombres: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    telefono: DataTypes.STRING,
    direccion: DataTypes.STRING,
    idDependencia: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Funcionario',
  });
  return Funcionario;
};