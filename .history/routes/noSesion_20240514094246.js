const express = require('express');
const router = express.Router();

// Define la ruta GET para /noSesion
router.get('/', (req, res) => {
  res.render('noSesion', { title: 'No Sesión' });
});

module.exports = router;