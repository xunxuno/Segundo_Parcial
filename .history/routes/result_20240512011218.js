const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', (req, res) => {
  // Aquí puedes obtener los datos necesarios de req.body y guardarlos en palabraCache
  let palabraCache = {
      texto: req.body.texto,
      origen: req.body.origen,
      destino: req.body.destino
  };
  // Luego, renderiza la vista 'result' y pasa palabraCache como parte de los datos
  res.render('result', { title: 'Resultado', palabraCache: palabraCache });
});

module.exports = router;