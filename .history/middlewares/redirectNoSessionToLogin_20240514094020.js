function redirectNoSessionToLogin(req, res, next) {
    // Redirige al usuario a la página de inicio de sesión ("/login")
    res.redirect('/login');
  }
  
  module.exports = redirectNoSessionToLogin;