'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AccionesMantenimiento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      AccionesMantenimiento.belongsTo(models.FichaMantenimiento,{
        foreignKey: 'idFichaMantenimiento',
        target_Key: 'id'
      })
    }
  };
  AccionesMantenimiento.init({
    descripcion: DataTypes.STRING,
    observaciones: DataTypes.STRING,
    idFichaMantenimiento: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'AccionesMantenimiento',
  });
  return AccionesMantenimiento;
};