const express = require('express');
const router = express.Router();

let visitasNoSesion = {};

router.get('/noSesion', (req, res) => {
    // Verificar si el usuario está autenticado
    if (!req.user || !req.user.nombre) {
        // Incrementar el contador de visitas para esta sesión
        visitasNoSesion[req.ip] = (visitasNoSesion[req.ip] || 0) + 1;

        // Verificar si el contador alcanza las 3 visitas
        if (visitasNoSesion[req.ip] >= 3) {
            // Redirigir a la página de inicio de sesión si se alcanza el límite
            return res.redirect('/login');
        }
    }
    
    // Renderizar la página '/noSesion'
    res.render('noSesion');
});
module.exports = router;