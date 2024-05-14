const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('eg', { title: 'eg' });
});
  
  module.exports = router;