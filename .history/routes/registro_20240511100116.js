const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    res.render('registro', { title: 'Registro' });
});
  
  module.exports = router;