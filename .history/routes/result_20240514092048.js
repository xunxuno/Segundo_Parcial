const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const { procesarDatos, palabraCache } = require('../controllers/palabraController');
const { convertir } = require('../database/tables/operaciones');
const { ultimaConversion } = require('../database/tables/operaciones');
const {obtenerIDPorNombre} = require('../database/tables/usuarios');
const palabraController = require('../controllers/palabraController');

// Define la ruta GET para /resultado
router.get('/', async(req, res) => {
  if (palabraCache && palabraCache.textoOriginal && palabraCache.resultado && palabraCache.origen && palabraCache.destino && req.user.nombre) {
    
    // Renderizar la vista 'result' y pasar los datos necesarios
    console.log('renderizado exitoso');
    const id_usuario =  await obtenerIDPorNombre(req.user.nombre);
    const palabra_original = palabraCache.textoOriginal;
    const idioma_original = palabraCache.origen;
    const idioma_destino = palabraCache.destino;
    const nueva_palabra = palabraCache.resultado;
    let datosUltimaConversion = null;

    try {
        await convertir(id_usuario, palabra_original, idioma_original, idioma_destino, nueva_palabra);
        datosUltimaConversion = await ultimaConversion(id_usuario);
        console.log('Datos enviados con éxito a la función convertir');
        res.render('result', { 
          title: 'Result', 
          palabraCache: palabraCache,
          datosUltimaConversion: datosUltimaConversion // Pasar datos a la vista
      });
        // Aquí puedes hacer otras acciones después de enviar los datos
    } catch (error) {
        console.error('Error al enviar datos a la función convertir:', error);
        // Maneja el error de acuerdo a tus necesidades
        res.render('error', { error: 'Error al procesar los datos' });
    }

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