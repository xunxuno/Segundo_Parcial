const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const palabraController = require('../controllers/palabraController');

// Definir la ruta POST para /result y usar la función procesarDatos del controlador de palabras
router.post('/result', palabraController.procesarDatos);

// Definir la ruta GET para /result y renderizar la vista
router.get('/result', (req, res) => {
  // Renderizar la vista 'result'
  res.render('result', { /* datos que desees pasar a la vista */ });
});



module.exports = router;