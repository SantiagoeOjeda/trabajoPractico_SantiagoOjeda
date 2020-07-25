const express = require('express');
const router = express.Router();
const sucursalesController = require('../controllers/sucursalControllers')

router.get('/', sucursalesController.index)
router.get('/:id', sucursalesController.sucursal)






module.exports = router