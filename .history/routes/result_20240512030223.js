const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const palabraController = require('../controllers/palabraController');

// Definir la ruta POST para /result y usar la función procesarDatos del controlador de palabras
router.post('/result', palabraController.procesarDatos);

module.exports = router;