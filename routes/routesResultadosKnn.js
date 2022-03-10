const express = require("express");
const router = express.Router();
const controllerResultadosKnn = require("../controllers/controllerResultadosKnn");

router.get("/",controllerResultadosKnn.getResultadosKnn);
router.get("/:id",controllerResultadosKnn.getResultadoKnnById);
router.get("/concsv/:id",controllerResultadosKnn.getResultadoKnnByIdConCSV);
router.post("/",controllerResultadosKnn.createResultadoKnn);
router.patch("/:id",controllerResultadosKnn.editResultadoKnn);
router.delete("/:id",controllerResultadosKnn.deleteResultadoKnn);

module.exports = router;

