// routes/operacion.js
const express = require('express');
const router = express.Router();
const { convertir } = require('../database/tables/operaciones'); // Archivo contenedor de querys para MySQL
const authMiddleWare = require('../middlewares/authMiddleware');



router.post('/', async (req, res) => {
    const usuario = await obtenerIdUsuario(); // Aquí obtén el ID del usuario
    const palabra_original = palabraCache.textoOriginal;
    const idioma_original = palabraCache.origen;
    const idioma_destino = palabraCache.destino;
    const nueva_palabra = palabraCache.resultado;

    try {
        await convertir(usuario, palabra_original, idioma_original, idioma_destino, nueva_palabra);
        console.log('Datos enviados con éxito a la función convertir');
        res.redirect('/result');
        // Aquí puedes hacer otras acciones después de enviar los datos
    } catch (error) {
        console.error('Error al enviar datos a la función convertir:', error);
        // Maneja el error de acuerdo a tus necesidades
    }
});


module.exports = router;