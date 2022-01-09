'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Imagen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Imagen.belongsTo(models.Equipo,{
        foreignKey: 'idEquipo',
        target_Key: 'id'
      })
    }
  };
  Imagen.init({
    fechaSubida: DataTypes.DATE,
    urlImagen: DataTypes.STRING,
    idEquipo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Imagen',
  });
  return Imagen;
};