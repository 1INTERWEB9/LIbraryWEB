const helpers = {};

helpers.isAuthenticated = (req,res,next) => {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect('/users/signin');
}

helpers.isAuthenticatedWithLessOptions = (req, res, next) => {
    if (req.isAuthenticated()) {
        // Si el usuario está autenticado, se permite el acceso completo
        res.locals.isAuthenticated = true; // Agrega una variable al contexto para indicar la autenticación
      } else {
        // Si el usuario no está autenticado, se muestra una versión limitada de la página
        res.locals.isAuthenticated = false; // Agrega una variable al contexto para indicar la autenticación
      }
      return next();
  };

module.exports = helpers;