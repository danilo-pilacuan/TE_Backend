'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TipoEquipo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TipoEquipo.hasMany(models.Equipo,{
        foreignKey: 'idTipoEquipo'
      })
    }
  };
  TipoEquipo.init({
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TipoEquipo',
  });
  return TipoEquipo;
};