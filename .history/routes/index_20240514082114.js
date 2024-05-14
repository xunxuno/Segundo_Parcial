// routes/index.js
const express = require('express');
const router = express.Router();

// Rutas públicas
router.get('/', (req, res) => {
  var sessionCookie = req.session;

  // Hacer algo con la cookie de sesión
  console.log(sessionCookie);
  res.render('index', { title: req.user != null ? `ArchiMagos Dominus ${req.user.nombre}` : 'VoxScritus', user: req.user != null ? `${req.user.nombre}` : ''});
});

module.exports = router;