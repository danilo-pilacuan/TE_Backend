'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FichaMantenimiento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      FichaMantenimiento.belongsTo(models.Funcionario,{
        foreignKey: 'idFuncionario',
        target_Key: 'id'
      }),
      FichaMantenimiento.belongsTo(models.Equipo,{
        foreignKey: 'idEquipo',
        target_Key: 'id'
      })

    }
  };
  FichaMantenimiento.init({
    numFormulario: DataTypes.STRING,
    idFuncionario: DataTypes.INTEGER,
    idEquipo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'FichaMantenimiento',
  });
  return FichaMantenimiento;
};