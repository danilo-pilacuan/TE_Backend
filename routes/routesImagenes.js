const express = require("express");
const router = express.Router();
const controllerImagenes = require('../controllers/controllerImagenes')

router.get("/",controllerImagenes.getImagenes);
router.get("/:id",controllerImagenes.getImagenById);
router.post("/",controllerImagenes.createImagen);
router.patch("/:id",controllerImagenes.editImagen);
router.delete("/:id",controllerImagenes.deleteImagen);

module.exports = router;

