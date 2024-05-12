const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const palabraController = require('../controllers/palabraController');

let palabraCache = {}; // Inicialización básica de palabraCache

// Define la ruta GET para /resultado
router.get('/', (req, res) => {
  if (palabraCache && palabraCache.texto && palabraCache.origen && palabraCache.destino) {
    // Renderizar la vista 'result' y pasar los datos necesarios
    res.render('result', { title: 'Result', palabraCache: palabraCache });
  } else {
    // Si falta algún dato en palabraCache, redirigir a la página principal o mostrar un mensaje de error
    res.redirect('/');
    // O puedes renderizar una vista de error
    // res.render('error', { message: 'Error: Falta información en palabraCache' });
  }
});


// Definir la ruta POST para /result y usar la función procesarDatos del controlador de palabras
router.post('/', (req, res, next) => {
  // Llama a la función procesarDatos del controlador y pasa req y res como argumentos
  palabraController.procesarDatos(req, res, () => {
    // Redirige la respuesta a la ruta '/resultado' después de que se haya procesado la solicitud
    res.redirect('/result');

  });
});



module.exports = router;