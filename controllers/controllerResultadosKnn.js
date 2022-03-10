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

const csv=require('csvtojson')

module.exports = class controllerResultadosKnn {

    static async getResultadosKnn(req,res){
        modeloResultadosKnn.findAll({
            include : [
                {model:modeloEquipo},
            ]
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    
    }

    static async getResultadoKnnById(req,res){
        modeloResultadosKnn.findOne({
            where:{ id : req.params.id }
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async getResultadoKnnByIdConCSV(req,res){
        console.log(req.params.id)
        modeloResultadosKnn.findOne({
            where:{ id : req.params.id }
        })
        .then((data)=>{
            console.log(data.filename)
            console.log(__dirname)
            console.log(__dirname+"/../"+data.filename)
            csv({
                noheader:true,
                trim:true,
                headers:["CPU","RAM"]
            })
            .fromFile(__dirname+"/../"+data.filename)
            .then((jsonObj)=>{
                let arrayCPU=jsonObj.map(a=>Number(a.CPU))
                let arrayRAM=jsonObj.map(a=>Number(a.RAM))
                console.log(arrayCPU);
                console.log(arrayRAM);
                
                
                data["dataValues"]["CPU"]=arrayCPU;
                data["dataValues"]["RAM"]=arrayRAM;
                console.log(data);
                res.json({resultado:data})
                /**
                 * [
                 * 	{a:"1", b:"2", c:"3"},
                 * 	{a:"4", b:"5". c:"6"}
                 * ]
                 */ 
            })
            
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async createResultadoKnn(req,res){
        modeloResultadosKnn.create(req.body)
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async editResultadoKnn(req,res){
        modeloResultadosKnn.update(req.body,{
            where: { id: req.params.id }
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async deleteResultadoKnn(req,res){
        modeloResultadosKnn.destroy({
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