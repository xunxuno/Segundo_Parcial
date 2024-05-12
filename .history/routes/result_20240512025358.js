const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const palabraController = require('../controllers/palabraController');

// Ruta para procesar los datos del formulario
router.post('/result', palabraController.procesarDatos);

module.exports = router;