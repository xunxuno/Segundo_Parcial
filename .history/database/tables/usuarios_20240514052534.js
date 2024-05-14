const { obtenerConexion } = require('../conexion');

// Función para insertar un nuevo usuario en la base de datos MySQL
async function registrar(nombre, email, password) {
    const conexion = await obtenerConexion();
    try {
        await conexion.query('INSERT INTO Usuarios (nombre, email, password_hash) VALUES (?, ?, ?)', [nombre, email, password]);
        console.log('Usuario insertado correctamente');
    } catch (error) {
        console.error('Error al insertar usuario:', error);
        throw error;
    } finally {
        conexion.release(); // Liberar la conexión al finalizar
    }
}

// Función para obtener un usuario por su nombre de usuario
async function obtenerPorNombre(nombre) {
    const conexion = await obtenerConexion();
    try {
        const [results] = await conexion.query('SELECT * FROM Usuarios WHERE nombre = ?', [nombre]);
        return results[0];
    } catch (error) {
        console.error('Error al obtener usuario por nombre:', error);
        throw error;
    } finally {
        conexion.release(); // Liberar la conexión al finalizar
    }
}

// Función para obtener un usuario por su ID
async function obtenerPorId(id) {
    const conexion = await obtenerConexion();
    try {
        const [results] = await conexion.query('SELECT * FROM Usuarios WHERE id = ?', [id]);
        return results[0];
    } catch (error) {
        console.error('Error al obtener usuario por ID:', error);
        throw error;
    } finally {
        conexion.release(); // Liberar la conexión al finalizar
    }
}

// Función para obtener el ID del usuario
async function obtenerIDPorNombre(nombre) {
    const conexion = await obtenerConexion();
    try {
        const [results] = await conexion.query('SELECT id FROM Usuarios WHERE nombre = ?', [nombre]);
        return results[0].id;
    } catch (error) {
        console.error('Error al obtener id por nombre:', error);
        throw error;
    } finally {
        conexion.release(); // Liberar la conexión al finalizar
    }
}

// Funcion para registrar el login de los usuarios
async function registrarLogin(id) {
    const conexion = await obtenerConexion();
    try {
        await conexion.query('INSERT INTO Historial_Login (id_usuario) VALUES (?)', [id]);
        console.log('Login registrado correctamente');
    } catch (error) {
        console.error('Error al registrar login:', error);
        throw error;
    } finally {
        conexion.release(); // Liberar la conexión al finalizar
    }
}

module.exports = {
    registrar,
    obtenerPorNombre,
    obtenerPorId,
    obtenerIDPorNombre
};