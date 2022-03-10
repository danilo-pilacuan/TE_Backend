'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ResultadosKnn extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ResultadosKnn.belongsTo(models.Equipo,{
        foreignKey: 'idEquipo',
        target_Key: 'id'
      })
    }
  };
  ResultadosKnn.init({
    fecha: DataTypes.DATE,
    claseKnn: DataTypes.INTEGER,
    filename: DataTypes.STRING,
    idEquipo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ResultadosKnn',
  });
  return ResultadosKnn;
};