const express = require("express");
const router = express.Router();
const controllerAccionesMantenimiento = require('../controllers/controllerAccionesMantenimiento')

router.get("/",controllerAccionesMantenimiento.getAccionesMantenimiento);
router.get("/byfichaid/:id",controllerAccionesMantenimiento.getAccionesMantenimientoByFichaId);
router.get("/:id",controllerAccionesMantenimiento.getAccionMantenimiento);
router.post("/",controllerAccionesMantenimiento.createAccionMantenimiento);
router.patch("/:id",controllerAccionesMantenimiento.editAccionMantenimiento);
router.delete("/:id",controllerAccionesMantenimiento.deleteAccionMantenimiento);

module.exports = router;

