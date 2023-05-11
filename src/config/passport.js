const passport= require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');
passport.use(new LocalStrategy({
    usernameField: 'Username',
    passwordField: 'Password'

},async(Username,Password, done) =>{
    //Confirmar si existe el usuario
    const Acount = new User( await User.findOne({Username: Username}).lean());
    const prueba=await User.findOne({Username: Username}).lean();
    if(!prueba)
    {
        return done(null,false,{message:'Usuario no encontrado'});
    }
    if(prueba)
    {
        // Confirmar
        const match = await Acount.matchPassword(Password);
        if(match)
        {
            return done(null,Acount);
        }
        if(!match)
        {
            return done(null,false,{message:'Contraseña incorrecta'}); 
        }
    }
}));


passport.serializeUser((Acount,done)=>{
    done(null,Acount.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id)
      .lean()
      .exec(function (err, user) {
        done(err, user);
      });
  });

