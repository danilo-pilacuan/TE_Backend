'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dependencia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Dependencia.hasMany(models.Funcionario,{
        foreignKey: 'idDependencia'
      })
    }
  };
  Dependencia.init({
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dependencia',
    tableName: 'Dependencias'
  });
  return Dependencia;
};