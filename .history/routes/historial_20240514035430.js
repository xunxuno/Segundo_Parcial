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
          title: 'Historial', 
          datosHistorial: datosHistorial // Pasar datos a la vista
      });
        // Aquí puedes hacer otras acciones después de enviar los datos
    } catch (error) {
        console.error('Error al enviar datos a la función historial:', error);
        // Maneja el error de acuerdo a tus necesidades
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