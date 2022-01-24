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

// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
module.exports = class controllerCaracteristicaEquipo {
    //fetch all Users
    static async getCaracteristicasEquipo(req,res){
        modeloCaracteristicaEquipo.findAll({
            include : [
                {model:modeloEquipo},
                {model:modeloTipoCaracteristicaEquipo}
            ]
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:"nosdaads"})
        })
    
    }

    static async getCaracteristicaEquipoById(req,res){
        modeloCaracteristicaEquipo.findOne({
            where:{ id : req.params.id },
            include : [
                {model:modeloEquipo},
                {model:modeloTipoCaracteristicaEquipo}
            ]
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    //create a User
    static async createCaracteristicaEquipo(req,res){
        modeloCaracteristicaEquipo.create(req.body)
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async editCaracteristicaEquipo(req,res){
        modeloCaracteristicaEquipo.update(req.body,{
            where: { id: req.params.id }
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async deleteCaracteristicaEquipo(req,res){
        modeloCaracteristicaEquipo.destroy({
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