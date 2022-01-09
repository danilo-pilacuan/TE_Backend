const express = require("express");
const router = express.Router();
const controllerTipoEquipo = require('../controllers/controllerTipoEquipo')

router.get("/",controllerTipoEquipo.getTiposEquipo);
router.get("/:id",controllerTipoEquipo.getTipoEquipoById);
router.post("/",controllerTipoEquipo.createTipoEquipo);
router.patch("/:id",controllerTipoEquipo.editTipoEquipo);
router.delete("/:id",controllerTipoEquipo.deleteTipoEquipo);

module.exports = router;

