'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CaracteristicaEquipo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CaracteristicaEquipo.belongsTo(models.Equipo,{
        foreignKey: 'idEquipo',
        target_Key: 'id'
      })
      CaracteristicaEquipo.belongsTo(models.TipoCaracteristicaEquipo,{
        foreignKey: 'idTipoCaracteristicaEquipo',
        target_Key: 'id'
      })
    }
  };
  CaracteristicaEquipo.init({
    descripcion: DataTypes.STRING,
    idEquipo: DataTypes.INTEGER,
    idTipoCaracteristicaEquipo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CaracteristicaEquipo',
  });
  return CaracteristicaEquipo;
};