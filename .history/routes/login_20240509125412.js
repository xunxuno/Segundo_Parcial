const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    res.render('login', { title: 'Iniciar sesion' });
});
  
  module.exports = router;