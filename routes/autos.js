const express = require('express');
const router = express.Router();
const autosController = require('../controllers/autosControllers')

router.get('/', autosController.index)
router.get('/:id/:dato?', autosController.vehiculo)






module.exports = router