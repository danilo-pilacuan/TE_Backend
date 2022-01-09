const express = require("express");
const router = express.Router();
const controllerTipoCaracteristicaEquipo = require('../controllers/controllerTipoCaracteristicaEquipo')

router.get("/",controllerTipoCaracteristicaEquipo.getTiposCaracteristicaEquipo);
router.get("/:id",controllerTipoCaracteristicaEquipo.getTipoCaracteristicaEquipoById);
router.post("/",controllerTipoCaracteristicaEquipo.createTipoCaracteristicaEquipo);
router.patch("/:id",controllerTipoCaracteristicaEquipo.editTipoCaracteristicaEquipo);
router.delete("/:id",controllerTipoCaracteristicaEquipo.deleteTipoCaracteristicaEquipo);

module.exports = router;

