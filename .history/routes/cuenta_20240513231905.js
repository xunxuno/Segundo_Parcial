// routes/cuenta.js
const express = require('express');
const router = express.Router();
const passport = require('passport');

// Rutas públicas
router.get('/', (req, res) => {
  res.render('cuenta', { title: req.user != null ? `ArchiMagos Dominus ${req.user.nombre}` : 'VoxScritus', user: req.user != null ? `${req.user.nombre}` : ''});
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