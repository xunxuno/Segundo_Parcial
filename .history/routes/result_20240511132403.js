const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', (req, res) => {
    res.render('result', { title: 'Resultado' });
});
  
  module.exports = router;