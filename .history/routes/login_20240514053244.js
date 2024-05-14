const express = require('express');
const router = express.Router();
const passport = require('passport');
const authMiddleware = require('../middlewares/authMiddleware'); // Middleware para proteger rutas
const { registrarLogin } = require('../database/tables/usuarios');

router.get('/', (req, res) => {
    res.render('login', { title: 'Iniciar sesion', user: req.user != null ? `${req.user.nombre}` : ''  });
});
  
router.post('/', passport.authenticate('local', {
  failureRedirect: '/login',
  failureFlash: true
}), async (req, res) => {
  // Si se autentica correctamente, crea un token JWT
  const token = authMiddleware.generateToken(req.user.id);

  // Registra el acceso de login
  try {
    await registrarLogin(req.user.id);
    console.log("registro de login exitoso");
  } catch (error) {
    console.error('Error al registrar el login:', error);
    // Puedes manejar el error según tus necesidades
  }

  res.cookie('token', token, { httpOnly: true, secure: false });

  res.redirect('/');
});

  module.exports = router;