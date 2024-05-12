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


// Configura las rutas
router.use('/', index);
router.use('/result', result);
router.use('/login', login);
router.use('/registro', registro);
router.use('/registrar_usuario', registrarUsuario);

// Ruta para manejar la solicitud POST y dirigirla al controlador
router.post('/result', (req, res) => {
    const origen = req.body.origen;
});

router.post('../controllers/palabraController', (req, res) => {
    const palabraCache = {};
});



module.exports = router;