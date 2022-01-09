const express = require("express");
const router = express.Router();
const controllerFichaMantenimiento = require('../controllers/controllerFichaMantenimiento')

router.get("/",controllerFichaMantenimiento.getFichasMantenimiento);
router.get("/:id",controllerFichaMantenimiento.getFichaMantenimientoById);
router.post("/",controllerFichaMantenimiento.createFichaMantenimiento);
router.patch("/:id",controllerFichaMantenimiento.editFichaMantenimiento);
router.delete("/:id",controllerFichaMantenimiento.deleteFichaMantenimiento);

module.exports = router;

