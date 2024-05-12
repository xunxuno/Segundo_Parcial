const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const palabraController = require('../controllers/palabraController');

let palabraCache = {}; // Inicialización básica de palabraCach

router.get('/result', (req, res) => {
  if (!palabraCache || !palabraCache.texto || !palabraCache.resultado || !palabraCache.origen || !palabraCache.destino) {
    // Si palabraCache no está definida o falta algún dato necesario, redirige a otra página de error o renderiza una página de error.
    res.render('error', { message: 'Datos insuficientes en palabraCache' });
  } else {
    // Renderiza la vista 'result' y pasa los datos necesarios
    res.render('result', { title: 'Result', palabraCache: palabraCache });
  }
});

// Define la ruta GET para /resultado
router.get('/result', (req, res) => {
  // Renderiza la vista 'result' y pasa los datos necesarios
  res.render('result', { title: 'Result', palabraCache: palabraCache }); // Asegúrate de que palabraCache esté definida y tenga los datos necesarios
});



module.exports = router;