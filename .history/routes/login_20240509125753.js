const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('login', { title: 'Iniciar sesion' });
});
  
  module.exports = router;