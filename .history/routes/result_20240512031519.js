const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const palabraController = require('../controllers/palabraController');
const { render } = require('pug');

// Definir la ruta POST para /result y usar la función procesarDatos del controlador de palabras
//router.post('/result', palabraController.procesarDatos);

router.post('/result', (req, res, next) => {
  palabraCanche.procesarDatos;
  console.log('Solicitud POST recibida en /result');
  next.render('result');
  console.log('renderizando');
});

module.exports = router;