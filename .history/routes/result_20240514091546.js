const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const { procesarDatos, palabraCache } = require('../controllers/palabraController');
const { convertir } = require('../database/tables/operaciones');
const { ultimaConversion } = require('../database/tables/operaciones');
const {obtenerIDPorNombre, CrearInvitado} = require('../database/tables/usuarios');
const palabraController = require('../controllers/palabraController');

// Define la ruta GET para /resultado
router.get('/', async (req, res) => {
  try {
    if (palabraCache && palabraCache.textoOriginal && palabraCache.resultado && palabraCache.origen && palabraCache.destino) {
      let id_usuario;

      if (req.user && req.user.nombre) {
        const usuario = await obtenerIDPorNombre(req.user.nombre);
        if (usuario) {
          id_usuario = usuario.id;
        } else {
          throw new Error('Usuario no encontrado');
        }
      } else {
        id_usuario = await CrearInvitado();
      }

      console.log('renderizado exitoso');

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
          datosUltimaConversion: datosUltimaConversion 
        });
      } catch (error) {
        console.error('Error al enviar datos a la función convertir:', error);
        res.render('error', { error: 'Error al procesar los datos' });
      }

    } else {
      console.log('Falta algún dato en palabraCache');
      console.log('Contenido de palabraCache:', palabraCache);
      res.redirect('/');
    }
  } catch (error) {
    console.error('Error en la obtención del ID del usuario:', error);
    res.status(500).send('Error en la obtención del ID del usuario');
  }
});

// Definir la ruta POST para /result y usar la función procesarDatos del controlador de palabras
router.post('/', (req, res, next) => {
  palabraController.procesarDatos(req, res, () => {
    res.redirect('/result');
  });
});

module.exports = router;