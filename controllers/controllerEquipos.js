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
const modeloResultadosKnn = require('../models').ResultadosKnn

module.exports = class controllerEquipos {

    static async getEquipos(req,res){
        modeloEquipo.findAll({
            include : [
                {model:modeloFuncionario},
                {model:modeloEstadoEquipo},
                {model:modeloCaracteristicaEquipo},
                {model:modeloImagen},
                {model:modeloTipoEquipo},
                {model:modeloResultadosKnn}
            ]
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    
    }

    static async getEquipoById(req,res){
        modeloEquipo.findOne({
            where:{ id : req.params.id },
            include : [
                {model:modeloFuncionario},
                {model:modeloEstadoEquipo},
                {model:modeloCaracteristicaEquipo, include:[{model:modeloTipoCaracteristicaEquipo}]},
                {model:modeloImagen},
                {model:modeloTipoEquipo},
                {model:modeloResultadosKnn}
            ],
            order:[
                [{model:modeloResultadosKnn},'createdAt','DESC']
            ]
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async createEquipo(req,res){
        modeloEquipo.create(req.body)
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async editEquipo(req,res){
        modeloEquipo.update(req.body,{
            where: { id: req.params.id }
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async deleteEquipo(req,res){
        modeloEquipo.destroy({
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