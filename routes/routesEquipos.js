const express = require("express");
const router = express.Router();
const controllerEquipos = require('../controllers/controllerEquipos')

router.get("/",controllerEquipos.getEquipos);
router.get("/:id",controllerEquipos.getEquipoById);
router.post("/",controllerEquipos.createEquipo);
router.patch("/:id",controllerEquipos.editEquipo);
router.delete("/:id",controllerEquipos.deleteEquipo);

module.exports = router;

