const express = require("express");
const router = express.Router();
const controllerFuncionarios = require('../controllers/controllerFuncionarios')

router.get("/",controllerFuncionarios.getFuncionarios);
router.get("/:id",controllerFuncionarios.getFuncionarioById);
router.post("/",controllerFuncionarios.createFuncionario);
router.patch("/:id",controllerFuncionarios.editFuncionario);
router.delete("/:id",controllerFuncionarios.deleteFuncionario);

module.exports = router;

