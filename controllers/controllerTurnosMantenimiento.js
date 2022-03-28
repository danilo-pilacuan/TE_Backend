const { Op } = require("sequelize");

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
const modeloTurnosMantenimiento = require('../models').TurnoMantenimiento

module.exports = class controllerTurnosMantenimiento {

    static async getTurnosMantenimiento(req,res){
        modeloTurnosMantenimiento.findAll({
            include : [
                {model:modeloEquipo, include:[{model:modeloFuncionario,include:[{model:modeloDependencia}]},{model:modeloResultadosKnn},{model:modeloTipoEquipo}]},
                {model:modeloFichaMantenimiento},
            ]
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    
    }
    static async getTurnosMantenimientoNoAtendidos(req,res){
        modeloTurnosMantenimiento.findAll({
            include : [
                {model:modeloEquipo, include:[{model:modeloFuncionario,include:[{model:modeloDependencia}]},{model:modeloResultadosKnn},{model:modeloTipoEquipo}]},
                {model:modeloFichaMantenimiento},
            ],
            where:{atendido:0}
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    
    }

    static async getTurnosMantenimientoAtendidos(req,res){
        modeloTurnosMantenimiento.findAll({
            include : [
                {model:modeloEquipo, include:[{model:modeloFuncionario,include:[{model:modeloDependencia}]},{model:modeloResultadosKnn},{model:modeloTipoEquipo}]},
                {model:modeloFichaMantenimiento},
            ],
            where:{atendido:1}
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    
    }
    static async getTurnosMantenimientoAtendidos(req,res){
        modeloTurnosMantenimiento.findAll({
            include : [
                {model:modeloEquipo, include:[{model:modeloFuncionario,include:[{model:modeloDependencia}]},{model:modeloResultadosKnn},{model:modeloTipoEquipo}]},
                {model:modeloFichaMantenimiento},
            ],
            where:{atendido:1}
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    
    }
    static async getTurnosMantenimientoAtendidosByEquipoId(req,res){
        modeloTurnosMantenimiento.findAll({
            include : [
                {model:modeloEquipo, include:[{model:modeloFuncionario,include:[{model:modeloDependencia}]},{model:modeloResultadosKnn},{model:modeloTipoEquipo}]},
                {model:modeloFichaMantenimiento},
            ],
            where:{
                [Op.and]: [{atendido:1},{idEquipo:req.params.id}]
                }
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    
    }
    static async getTurnosMantenimientoNoAtendidosByEquipoId(req,res){
        modeloTurnosMantenimiento.findAll({
            include : [
                {model:modeloEquipo, include:[{model:modeloFuncionario,include:[{model:modeloDependencia}]},{model:modeloResultadosKnn},{model:modeloTipoEquipo}]},
                {model:modeloFichaMantenimiento},
            ],
            where:{
                [Op.and]: [{atendido:1},{idEquipo:req.params.id}]
                }
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    
    }

    static async getTurnoMantenimientoById(req,res){
        modeloTurnosMantenimiento.findOne({
            where:{ id : req.params.id },
            include : [
                {model:modeloEquipo, include:[{model:modeloFuncionario,include:[{model:modeloDependencia}]},{model:modeloResultadosKnn},{model:modeloTipoEquipo}]},
                {model:modeloFichaMantenimiento},
            ]
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async createTurnoMantenimiento(req,res){
        modeloTurnosMantenimiento.create(req.body)
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async editTurnoMantenimiento(req,res){
        modeloTurnosMantenimiento.update(req.body,{
            where: { id: req.params.id }
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async deleteTurnoMantenimiento(req,res){
        modeloTurnosMantenimiento.destroy({
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