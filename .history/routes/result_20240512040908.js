const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const palabraController = require('../controllers/palabraController');

// Definir la ruta POST para /result y usar la función procesarDatos del controlador de palabras
router.post('/result', (req, res, next) => {
  // Llama a la función procesarDatos del controlador y pasa req y res como argumentos
  palabraController.procesarDatos(req, res, () => {
    // Redirige la respuesta a la ruta '/resultado' después de que se haya procesado la solicitud
    res.redirect('/result');

  });
});

// Define la ruta GET para /resultado
router.get('/result', (req, res) => {
  // Renderiza la vista 'result' y pasa los datos necesarios
  res.render('result', { title: 'Result', palabraCache: palabraCache }); // Asegúrate de que palabraCache esté definida y tenga los datos necesarios
});



module.exports = router;