const express = require('express');
const app = express();
const session = require('express-session');
const path = require('path');
const router = require('./routes/routes');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const SQLiteStore = require('connect-sqlite3')(session);
const usuarios = require('./database/tables/usuarios'); // Archivo contenedor de querys para MySQL
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const authMiddleWare = require('./middlewares/authMiddleware');
const bodyParser = require('body-parser');
//const carritoController = require('./controllers/carritoController');

//Configura Cookie Parser
app.use(cookieParser());

// Middleware para analizar las solicitudes con cuerpo en formato x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//Configura DotEnv
dotenv.config();

// Configurar middleware para manejar sesiones
app.use(session({
  secret: process.env.ACCESS_TOKEN_SECRET, // Clave secreta para firmar la cookie de sesión
  resave: false,
  saveUninitialized: false,
  store: new SQLiteStore({ db: 'sessionsDB.sqlite', table: 'sessions' }) // Almacena las sesiones en una base de datos SQLite
}));

// Configura connect-flash
app.use(flash());

// Configurar Passport.js
app.use(passport.initialize());
app.use(passport.session());

// Configurar estrategia de autenticación local
passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      const user = await usuarios.obtenerPorNombre(username);
      if (!user) {
        return done(null, false, { message: 'Usuario incorrecto.' });
      }
      const passwordMatch = await authMiddleWare.comparePassword(password, user.password_hash);
      if (!passwordMatch) {
        return done(null, false, { message: 'Contraseña incorrecta.' });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
));


passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  await usuarios.obtenerPorId(id).then((user) => {
    done(null, user);
  }).catch((error) => {
    done(error, null);
  });
});

// Variable global para almacenar la palabra en caché
let palabraCache = {};



app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal');
});

app.use(express.urlencoded({ extended: true }));

// Configuración de la plantilla Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middleware para procesar archivos estáticos en la carpeta 'public'
app.use(express.static('public'));
app.use(express.json());

app.use('/', router);


//Ruta para cerrar sesión
app.get('/logout', async (req, res) => {
  await req.logout(async (err) => {
    if (err) {
      // Manejo del error, si es necesario
      console.error(err);
    }
    //req.session.destroy(); // Eliminar la sesión completa
    await req.session.destroy((err) => {
      if (err) {
        console.error('Error al destruir la sesión:', err);
        return res.status(500).send('Error al cerrar sesión');
      }
      console.log('req.session.destroy finalizado correctamente');
    });
    // Eliminar el contenido del almacén de sesiones
    await req.sessionStore.clear((err) => {
      if (err) {
        console.error('Error al limpiar el almacén de sesiones:', err);
        return res.status(500).send('Error al cerrar sesión');
      }
      console.log('req.sessionStore.clear finalizado correctamente');
    });
    res.clearCookie('token');
    res.redirect('/'); // Redirigir a la página principal u otra página de tu elección
  });
});



app.use(express.urlencoded({ extended: true }))


// Puerto en el que escucha el servidor
const port = 3001;
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});