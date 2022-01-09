'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Metrica extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Metrica.belongsTo(models.Equipo,{
        foreignKey: 'idEquipo',
        target_Key: 'id'
      })
    }
  };
  Metrica.init({
    fechaRecepcion: DataTypes.DATE,
    idEquipo: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    valor: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Metrica',
  });
  return Metrica;
};