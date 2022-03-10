const express = require("express");
const router = express.Router();
const controllerQR = require('../controllers/controllerQR')

router.get("/",controllerQR.getQR);
router.get("/render",controllerQR.renderQRInfo);

module.exports = router;

