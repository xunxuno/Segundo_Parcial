// routes/cuenta.js
const express = require('express');
const router = express.Router();
const passport = require('passport');
const { historialLogin } = require('../database/tables/usuarios');

// Rutas públicas
router.get('/:id_usuario', async (req, res) => {
  const { id_usuario } = req.params;
  try {
      const historial = await historialLogin(id_usuario);
      console.log('Historial obtenido:', historial); // Agrega un log para ver el historial obtenido
      res.render('historial', { 
          title: 'Historial de Login', 
          user: req.user != null ? `${req.user.nombre}` : '',
          historial: historial 
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