const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', (req, res) => {
    res.render('result', { title: 'Resultado' });
});
  
  module.exports = router;