// routes/historial.js
const express = require('express');
const router = express.Router();
const passport = require('passport');
const { obtenerHistorial } = require('../database/tables/operaciones');
const {obtenerIDPorNombre} = require('../database/tables/usuarios');

// Rutas públicas
router.get('/', async(req, res) => {
  console.log('Historial');
    let datosHistorial = null;
    const id_usuario = await obtenerIDPorNombre(req.user.nombre);

    try {
      datosHistorial = await obtenerHistorial(id_usuario);
        console.log('Datos enviados con éxito a la función historial');
        res.render('historial', { 
          title: req.user != null ? `ArchiMagos Dominus ${req.user.nombre}`: 'VoxScritus', user: req.user != null ? `${req.user.nombre}` : '', 
          datosHistorial: datosHistorial // Pasar datos a la vista
      });
    } catch (error) {
        console.error('Error al enviar datos a la función historial:', error);
        res.render('error', { error: 'Error al procesar los datos' });
    }
});

router.post('/', passport.authenticate('local', {
    failureRedirect: '/',
    failureFlash: true
  }), async (req, res) => {
    // Si se autentica correctamente, crea un token JWT
    const token = authMiddleware.generateToken(req.user.id);
  
    res.cookie('token', token, { httpOnly: true, secure: false });
  
    res.redirect('/');
  });

module.exports = router;