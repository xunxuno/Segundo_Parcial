// routes/cuenta.js
const express = require('express');
const router = express.Router();
const passport = require('passport');
const { historialLogin } = require('../database/tables/usuarios');

// Rutas públicas
router.get('/', async (req, res) => {
  const id_usuario = req.user && req.user.id; // Obtén el id_usuario del objeto req.user
  if (!id_usuario) {
      return res.status(401).render('error', { error: 'Usuario no autenticado' });
  }

  try {
      console.log('ID Usuario en la ruta:', id_usuario); // Log del ID de usuario en la ruta
      const datosHistorial = await historialLogin(id_usuario);
      console.log('Historial obtenido:', datosHistorial); // Log del historial obtenido
      res.render('historial', { 
          title: 'Historial de Login', 
          user: req.user ? `${req.user.nombre}` : '',
          datosHistorial: datosHistorial 
      });
  } catch (error) {
      console.error('Error al obtener el historial de login:', error);
      res.status(500).render('error', { error: 'Error al obtener el historial de login' });
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