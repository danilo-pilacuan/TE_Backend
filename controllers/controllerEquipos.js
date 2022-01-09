const modeloCaracteristicaEquipo = require('../models').CaracteristicaEquipo
const modeloDependencia = require('../models').Dependencia
const modeloEquipo = require('../models').Equipo
const modeloFichaMantenimiento = require('../models').FichaMantenimiento
const modeloFuncionario = require('../models').Funcionario
const modeloImagen = require('../models').Imagen
const modeloInventario = require('../models').Inventario
const modeloMetrica = require('../models').Metrica
const modeloTipoCaracteristicaEquipo = require('../models').TipoCaracteristicaEquipo
const modeloTipoEquipo = require('../models').TipoEquipo
const modeloUsuario = require('../models').Usuario

module.exports = class controllerEquipos {

    static async getEquipos(req,res){
        modeloEquipo.findAll({
            include : [
                {model:modeloFichaMantenimiento},
                {model:modeloFuncionario},
                {model:modeloInventario},
                {model:modeloCaracteristicaEquipo},
                {model:modeloImagen},
                {model:modeloTipoEquipo},
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
                {model:modeloFichaMantenimiento},
                {model:modeloFuncionario},
                {model:modeloInventario},
                {model:modeloCaracteristicaEquipo},
                {model:modeloImagen},
                {model:modeloTipoEquipo},
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