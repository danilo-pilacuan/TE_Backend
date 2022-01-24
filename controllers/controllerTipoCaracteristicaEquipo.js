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

module.exports = class controllerTipoCaracteristicaEquipo {

    static async getTiposCaracteristicaEquipo(req,res){
        modeloTipoCaracteristicaEquipo.findAll({
            include : [
                {model:modeloCaracteristicaEquipo},
            ]
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    
    }

    static async getTipoCaracteristicaEquipoById(req,res){
        modeloTipoCaracteristicaEquipo.findOne({
            where:{ id : req.params.id },
            include : [
                {model:modeloCaracteristicaEquipo},
            ]
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async createTipoCaracteristicaEquipo(req,res){
        modeloTipoCaracteristicaEquipo.create(req.body)
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async editTipoCaracteristicaEquipo(req,res){
        modeloTipoCaracteristicaEquipo.update(req.body,{
            where: { id: req.params.id }
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async deleteTipoCaracteristicaEquipo(req,res){
        modeloTipoCaracteristicaEquipo.destroy({
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