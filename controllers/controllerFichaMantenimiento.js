const modeloCaracteristicaEquipo = require('../models').CaracteristicaEquipo
const modeloDependencia = require('../models').Dependencia
const modeloEquipo = require('../models').Equipo
const modeloEstadoEquipo = require('../models').EstadoEquipo
const modeloFichaMantenimiento = require('../models').FichaMantenimiento
const modeloFuncionario = require('../models').Funcionario
const modeloImagen = require('../models').Imagen
const modeloInventario = require('../models').Inventario
const modeloMetrica = require('../models').Metrica
const modeloTipoCaracteristicaEquipo = require('../models').TipoCaracteristicaEquipo
const modeloTipoEquipo = require('../models').TipoEquipo
const modeloUsuario = require('../models').Usuario
const modeloTurnosMantenimiento = require('../models').TurnoMantenimiento

module.exports = class controllerFichaMantenimiento {

    static async getFichasMantenimiento(req,res){
        modeloFichaMantenimiento.findAll({
            include : [
                {model:modeloEquipo,include:[{model:modeloTipoEquipo}]},
                {model:modeloTurnosMantenimiento},
            ]
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    
    }

    static async getFichaMantenimientoById(req,res){
        modeloFichaMantenimiento.findOne({
            where:{ id : req.params.id },
            include : [
                {model:modeloEquipo,include:[{model:modeloTipoEquipo}]},
                {model:modeloTurnosMantenimiento},
            ]
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async createFichaMantenimiento(req,res){
        modeloFichaMantenimiento.create(req.body)
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async editFichaMantenimiento(req,res){
        modeloFichaMantenimiento.update(req.body,{
            where: { id: req.params.id }
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async deleteFichaMantenimiento(req,res){
        modeloFichaMantenimiento.destroy({
            where:{ id : req.params.id }
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

   
}