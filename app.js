//require('dotenv').config();
const express = require('express');
//const morgan = require('morgan');
const cors = require('cors')
const cookieParser = require('cookie-parser')

const app = express();
//const port = process.env.PORT || 3000;

const modeloCaracteristicaEquipo = require('./models').CaracteristicaEquipo
const modeloDependencia = require('./models').Dependencia
const modeloEquipo = require('./models').Equipo
const modeloFichaMantenimiento = require('./models').FichaMantenimiento
const modeloFuncionario = require('./models').Funcionario
const modeloImagen = require('./models').Imagen
const modeloInventario = require('./models').Inventario
const modeloMetrica = require('./models').Metrica
const modeloTipoCaracteristicaEquipo = require('./models').TipoCaracteristicaEquipo
const modeloTipoEquipo = require('./models').TipoEquipo
const modeloUsuario = require('./models').Usuario




app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000','http://localhost:8080','http://localhost:8081','http://localhost:4200']
}))
app.use(cookieParser())
//app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

// app.get('/mostrarMetricas',(req,res)=>{
//     modeloMetrica.findAll({
//         include: [{model:modeloEquipo}]
//     })
//     .then((data)=>{
//         res.json({datos:data})
//     })
//     .catch((error)=>{
//         res.json({error:error})
//     })
// })

// app.get('/mostrarEquipos',(req,res)=>{
//     modeloEquipo.findAll({
//         include: [{model:modeloFuncionario}]
//     })
//     .then((data)=>{
//         res.json({datos:data})
//     })
//     .catch((error)=>{
//         res.json({error:error})
//     })
// })

// app.get('/mostrarFuncionarios',(req,res)=>{
//     modeloFuncionario.findAll({
//         include: [{model:modeloDependencia}]
//     })
//     .then((data)=>{
//         res.json({datos:data})
//     })
//     .catch((error)=>{
//         res.json({error:error})
//     })
// })

// app.get('/obtenerUsuarios',(req,res)=>{
//     modeloUsuario.findAll({
//     })
//     .then((data)=>{
//         res.json({datos:data})
//     })
//     .catch((error)=>{
//         res.json({error:"nosdaads"})
//     })
// })


//prefijos de rutas

app.use('/api/caracteristicaequipo',require('./routes/routesCaracteristicaEquipo'))
app.use('/api/dependencias',require('./routes/routesDependencias'))
app.use('/api/equipos',require('./routes/routesEquipos'))
app.use('/api/fichamantenimiento',require('./routes/routesFichaMantenimiento'))
app.use('/api/funcionarios',require('./routes/routesFuncionarios'))
app.use('/api/imagenes',require('./routes/routesImagenes'))
app.use('/api/inventario',require('./routes/routesInventario'))
app.use('/api/metricas',require('./routes/routesMetricas'))
app.use('/api/tipoequipo',require('./routes/routesTipoEquipo'))
app.use('/api/tipocaracteristicaequipo',require('./routes/routesTipoCaracteristicaEquipo'))
app.use('/api/usuarios',require('./routes/routesUsuarios'))


app.listen(3000,()=>{
    console.log('Server UP running in http://localhost:3000')
})