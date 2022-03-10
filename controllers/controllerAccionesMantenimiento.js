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
const modeloAccionesMantenimiento = require('../models').AccionesMantenimiento

module.exports = class controllerAccionesMantenimiento {

    static async getAccionesMantenimiento(req,res){
        modeloAccionesMantenimiento.findAll({
            include : [
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
    
    static async getAccionesMantenimientoByFichaId(req,res){
        modeloAccionesMantenimiento.findAll({
            include : [
                {model:modeloFichaMantenimiento},
            ],
            where:{idFichaMantenimiento:req.params.id}
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    
    }
    
    static async getAccionMantenimiento(req,res){
        modeloAccionesMantenimiento.findOne({
            where:{ id : req.params.id },
            include : [
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

    static async createAccionMantenimiento(req,res){
        modeloAccionesMantenimiento.create(req.body)
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async editAccionMantenimiento(req,res){
        modeloAccionesMantenimiento.update(req.body,{
            where: { id: req.params.id }
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async deleteAccionMantenimiento(req,res){
        modeloAccionesMantenimiento.destroy({
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