// routes/index.js
const express = require('express');
const router = express.Router();

// Rutas públicas
router.get('/', (req, res) => {
  res.render('index', { title: req.user != null ? `ArchiMagos Dominus ${req.user.nombre}` : 'VoxScritus', user: req.user != null ? `${req.user.nombre}` : ''});
});

module.exports = router;