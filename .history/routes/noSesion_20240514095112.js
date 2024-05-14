const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('noSesion', { title: 'noSesion' });
});
  
  module.exports = router;