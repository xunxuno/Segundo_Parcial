// middlewares/visitCounter.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');

module.exports = function visitCounter(req, res, next) {
    if (!req.session.visitCount) {
      req.session.visitCount = 0;
    }
    req.session.visitCount++;
  
    if (req.session.visitCount > 3 && (!req.user || !req.user.name)) {
      return res.redirect('/login'); // Redirige a la página de inicio de sesión si no está autenticado
    }
    next();
  };