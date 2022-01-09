'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inventario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Inventario.belongsTo(models.Equipo,{
        foreignKey: 'idEquipo',
        target_Key: 'id'
      })
    }
  };
  Inventario.init({
    numInventario: DataTypes.STRING,
    fechaIngreso: DataTypes.DATE,
    idEquipo: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    observaciones: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Inventario',
  });
  return Inventario;
};