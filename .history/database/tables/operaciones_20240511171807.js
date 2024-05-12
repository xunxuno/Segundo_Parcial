const { obtenerConexion } = require('../conexion');

// Funcion para insertar una nueva operacion en la base de datos
async function convertir(usuario, palabra_original, idioma_original, idioma_destino, nueva_palabra){
    const conexion = await obtenerConexion();
    try {
        await conexion.query('INSERT INTO Operaciones (id_usuario, palabra_original, idioma_original, idioma_destino, nueva_palabra) VALUES (?, ?, ?, ?, ?)', [usuario, palabra_original, idioma_original, idioma_destino, nueva_palabra]);
        console.log('Operacion realizada con exito');
    }catch(error) {
        console.error('Error al insertar Operacion:', error);
        throw error;
    } finally {
        conexion.release(); // Liberar la conexión al finalizar
    }
}

async function obtenerHistorial(usuario){
    const conexion = await obtenerConexion();
    try {
        const [results] = await conexion.query('SELECT * FROM Operaciones WHERE nombre = ?', [nombre]);
        return results;
    } catch (error) {
        console.error('error al obetener el historial', error);
        throw error;
    } finally {
        conexion.release(); // Liberar la conexión al finalizar
    }
    
}