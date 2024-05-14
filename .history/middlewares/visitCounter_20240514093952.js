// middlewares/visitCounter.js
function visitCounter(req, res, next) {
    if (!req.session.visitCount) {
      req.session.visitCount = 0;
    }
    req.session.visitCount++;
  
    if (req.session.visitCount > 3 && (!req.userId)) {
      return res.redirect('/noSesion');
    }
    next();
  }
  
  module.exports = visitCounter;