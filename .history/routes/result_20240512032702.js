const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const palabraController = require('../controllers/palabraController');

// Definir la ruta POST para /result y usar la función procesarDatos del controlador de palabras
router.post('/', (req, res, next) => {
  // Llama a la función procesarDatos del controlador y pasa req y res como argumentos
  palabraController.procesarDatos(req, res, () => {
    // Redirige la respuesta a la ruta '/resultado' después de que se haya procesado la solicitud
    res.redirect('/result');
  });
});

// Define la ruta GET para /resultado
router.get('/result', (req, res) => {
  // Renderizar la vista 'result'
  res.render('result', { /* datos que desees pasar a la vista */ });
});




module.exports = router;