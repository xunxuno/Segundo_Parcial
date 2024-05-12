const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const palabraController = require('../controllers/palabraController');
const { render } = require('pug');

// Definir la ruta POST para /result y usar la función procesarDatos del controlador de palabras
router.post('/result', (req, res, next) => {
  // Llama a la función procesarDatos del controlador y pasa req y res como argumentos
  palabraController.procesarDatos(req, res);

  // Redirige la respuesta a la ruta '/resultado'
  res.redirect('/result');
});


module.exports = router;