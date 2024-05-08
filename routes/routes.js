// routes/routes.js

const express = require('express');
const router = express.Router();
//const authMiddleware = require('../middlewares/authMiddleware'); // Middleware para proteger rutas

// Importa las rutas específicas
const index = require('./index');
const result = require('./result');


// Configura las rutas
router.use('/', index);
router.use('/result', result);


module.exports = router;