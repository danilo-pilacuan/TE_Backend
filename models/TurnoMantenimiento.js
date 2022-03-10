'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TurnoMantenimiento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TurnoMantenimiento.belongsTo(models.Equipo,{
        foreignKey: 'idEquipo',
        target_Key: 'id'
      }),
      TurnoMantenimiento.belongsTo(models.ResultadosKnn,{
        foreignKey: 'idResultadoKnn',
        target_Key: 'id'
      }),
      TurnoMantenimiento.hasMany(models.FichaMantenimiento,{
        foreignKey: 'idTurnoMantenimiento'
      })
    }
  };
  TurnoMantenimiento.init({
    numTurno: DataTypes.INTEGER,
    atendido: DataTypes.INTEGER,
    fechaGeneracionTurno: DataTypes.DATE,
    idEquipo: DataTypes.INTEGER,
    idResultadoKnn: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TurnoMantenimiento',
  });
  return TurnoMantenimiento;
};