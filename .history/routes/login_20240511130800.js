const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('login', { title: 'Iniciar sesion', user: req.user != null ? `${req.user.nombre}` : ''  });
});
  
router.post('/', passport.authenticate('local', {
  failureRedirect: '/login',
  failureFlash: true
}), async (req, res) => {
  // Si se autentica correctamente, crea un token JWT
  const token = authMiddleware.generateToken(req.user.id);

  res.cookie('token', token, { httpOnly: true, secure: false });

  res.redirect('/result');
});

  module.exports = router;