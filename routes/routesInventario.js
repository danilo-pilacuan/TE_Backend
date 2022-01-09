const express = require("express");
const router = express.Router();
const controllerInventario = require('../controllers/controllerInventario')

router.get("/",controllerInventario.getInventarios);
router.get("/:id",controllerInventario.getInventarioById);
router.post("/",controllerInventario.createInventario);
router.patch("/:id",controllerInventario.editInventario);
router.delete("/:id",controllerInventario.deleteInventario);

module.exports = router;

