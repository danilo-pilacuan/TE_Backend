const express = require("express");
const router = express.Router();
const controllerDependencias = require('../controllers/controllerDependencias')

router.get("/",controllerDependencias.getDependencias);
router.get("/:id",controllerDependencias.getDependenciaById);
router.post("/",controllerDependencias.createDependencia);
router.patch("/:id",controllerDependencias.editDependencia);
router.delete("/:id",controllerDependencias.deleteDependencia);

module.exports = router;

