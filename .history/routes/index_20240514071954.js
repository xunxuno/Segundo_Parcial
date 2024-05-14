const express = require('express');
const router = express.Router();

// Rutas públicas
router.get('/', (req, res) => {
  res.render('index', {
    title: req.user != null ? `ArchiMagos Dominus ${req.user.nombre}` : 'VoxScritus',
    user: req.user != null ? `${req.user.nombre}` : '',
    failedAttempts: req.session.failedAttempts || 0 // Agregar failedAttempts a los datos renderizados
  });
});

module.exports = router;
