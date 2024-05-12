const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const palabraController = require('../controllers/palabraController');

// Definir la ruta POST para /result y usar la función procesarDatos del controlador de palabras
//router.post('/result', palabraController.procesarDatos);

router.post('/result', (req, res) => {
  palabraController.procesarDatos;
  console.log('Solicitud POST recibida en /result');
});

module.exports = router;