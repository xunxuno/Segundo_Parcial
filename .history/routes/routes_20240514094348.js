// routes/routes.js

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware'); // Middleware para proteger rutas
const palabraController = require('../controllers/palabraController');

// Importa las rutas específicas
const index = require('./index');
const result = require('./result');
const login = require('./login');
const registro = require('./registro');
const registrarUsuario = require('./registrar_usuario');
const historial = require('./historial');
const cuenta = require('./cuenta');
const eg = require('./eg');
const noSesion = require('./noSesion');


// Configura las rutas
router.use('/', index);
router.use('/result', result);
router.use('/login', login);
router.use('/registro', registro);
router.use('/registrar_usuario', registrarUsuario);
router.use('/historial', historial);
router.use('/cuenta', cuenta);
router.use('/eg', eg);
router.use('/noSesion', noSesion);

module.exports = router;