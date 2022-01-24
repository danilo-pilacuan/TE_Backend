'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Equipo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Equipo.belongsTo(models.TipoEquipo,{
        foreignKey: 'idTipoEquipo',
        target_Key: 'id'
      }),
      Equipo.belongsTo(models.Funcionario,{
        foreignKey: 'idFuncionario',
        target_Key: 'id'
      }),
      Equipo.hasMany(models.CaracteristicaEquipo,{
        foreignKey: 'idEquipo'
      }),
      Equipo.hasMany(models.FichaMantenimiento,{
        foreignKey: 'idEquipo'
      }),
      Equipo.hasMany(models.Inventario,{
        foreignKey: 'idEquipo'
      }),
      Equipo.hasMany(models.Metrica,{
        foreignKey: 'idEquipo'
      }),
      Equipo.hasMany(models.Imagen,{
        foreignKey: 'idEquipo'
      })
    }
  };
  Equipo.init({
    direccionIP: DataTypes.STRING,
    direccionMAC: DataTypes.STRING,
    idTipoEquipo: DataTypes.INTEGER,
    idFuncionario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Equipo',
  });
  return Equipo;
};