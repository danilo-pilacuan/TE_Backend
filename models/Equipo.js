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
      Equipo.belongsTo(models.EstadoEquipo,{
        foreignKey: 'idEstadoEquipo',
        target_Key: 'id'
      }),
      Equipo.hasMany(models.CaracteristicaEquipo,{
        foreignKey: 'idEquipo'
      }),
      Equipo.hasMany(models.FichaMantenimiento,{
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
    numInventario: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    direccionIP: DataTypes.STRING,
    direccionMAC: DataTypes.STRING,
    observaciones: DataTypes.STRING,
    idEstadoEquipo: DataTypes.INTEGER,
    idTipoEquipo: DataTypes.INTEGER,
    idFuncionario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Equipo',
  });
  return Equipo;
};