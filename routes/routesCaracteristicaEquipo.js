const express = require("express");
const router = express.Router();
const controllerCaracteristicaEquipo = require('../controllers/controllerCaracteristicaEquipo')

router.get("/",controllerCaracteristicaEquipo.getCaracteristicasEquipo);
router.get("/equipo/:id",controllerCaracteristicaEquipo.getCaracteristicasByEquipoId);
router.get("/:id",controllerCaracteristicaEquipo.getCaracteristicaEquipoById);
router.post("/",controllerCaracteristicaEquipo.createCaracteristicaEquipo);
router.patch("/:id",controllerCaracteristicaEquipo.editCaracteristicaEquipo);
router.delete("/:id",controllerCaracteristicaEquipo.deleteCaracteristicaEquipo);

// router.get("/getAll",controllerCaracteristicaEquipo.fetchAllUsers);

// router.post("/",controllerCaracteristicaEquipo.createUser);
// router.post("/login",controllerCaracteristicaEquipo.login);
// router.patch("/:name",controllerCaracteristicaEquipo.updateUser);
// router.delete("/:name",controllerCaracteristicaEquipo.deleteUser);




module.exports = router;

