const express = require("express");
const router = express.Router();
const controllerMetricas = require('../controllers/controllerMetricas')

router.get("/",controllerMetricas.getMetricas);
router.get("/:id",controllerMetricas.getMetricaById);
router.post("/",controllerMetricas.createMetrica);
router.patch("/:id",controllerMetricas.editMetrica);
router.delete("/:id",controllerMetricas.deleteMetrica);

module.exports = router;

