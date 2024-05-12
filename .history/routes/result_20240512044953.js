const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const palabraController = require('../controllers/palabraController');

// Función para procesar los datos del formulario
const procesarDatos = (req, res) => {
  console.log('Inicio de procesarDatos');
  // Capturar los datos del formulario y almacenarlos en palabraCache
  palabraCache.texto = req.body.texto;
  palabraCache.origen = req.body.origen;
  palabraCache.destino = req.body.destino;
  console.log('datos recibidos');

  // Llamar a la función procesarDatos del controlador
  palabraController.procesarDatos(req, res);
};

// Define la ruta GET para /resultado
router.get('/', (req, res) => {
  if (palabraCache && palabraCache.textoOriginal && palabraCache.resultado && palabraCache.origen && palabraCache.destino) {
    
    
    // Renderizar la vista 'result' y pasar los datos necesarios
    console.log('renderizado exitoso');
    res.render('result', { title: 'Result', palabraCache: palabraCache });
  } else {
    // Si falta algún dato en palabraCache, imprimir un mensaje en la consola y redirigir a la página principal
    console.log('Falta algún dato en palabraCache');
    // Imprimir el contenido de palabraCache en la consola
    console.log('Contenido de palabraCache:', palabraCache);
    res.redirect('/');
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