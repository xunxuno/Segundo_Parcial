// routes/index.js
const express = require('express');
const router = express.Router();

// Rutas públicas
router.get('/', (req, res) => {
  // Verificar si no hay un usuario autenticado
  if (!req.user) {
    // Crear la cookie solo para los usuarios no autenticados
    res.cookie('invitado', '3', { maxAge: 900000, httpOnly: true });
  }

  // Renderizar la página de inicio, pasando el título y el nombre de usuario si está autenticado
  res.render('index', { 
    title: req.user != null ? `ArchiMagos Dominus ${req.user.nombre}` : 'VoxScritus', 
    user: req.user != null ? `${req.user.nombre}` : '' 
  });
});

module.exports = router;