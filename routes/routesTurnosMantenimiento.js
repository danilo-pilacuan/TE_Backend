const express = require("express");
const router = express.Router();
const controllerTurnosMantenimiento = require('../controllers/controllerTurnosMantenimiento')

router.get("/",controllerTurnosMantenimiento.getTurnosMantenimiento);
router.get("/noatendidos",controllerTurnosMantenimiento.getTurnosMantenimientoNoAtendidos);
router.get("/noatendidosbyequipoid/:id",controllerTurnosMantenimiento.getTurnosMantenimientoNoAtendidosByEquipoId);
router.get("/atendidosbyequipoid/:id",controllerTurnosMantenimiento.getTurnosMantenimientoAtendidosByEquipoId);
router.get("/atendidos",controllerTurnosMantenimiento.getTurnosMantenimientoAtendidos);
router.get("/:id",controllerTurnosMantenimiento.getTurnoMantenimientoById);
router.post("/",controllerTurnosMantenimiento.createTurnoMantenimiento);
router.patch("/:id",controllerTurnosMantenimiento.editTurnoMantenimiento);
router.delete("/:id",controllerTurnosMantenimiento.deleteTurnoMantenimiento);

module.exports = router;

