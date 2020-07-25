const express = require('express');
const router = express.Router();
const marcasController = require('../controllers/marcasControllers')

router.get('/', marcasController.index)
router.get('/:id', marcasController.autoMarca)


module.exports = router