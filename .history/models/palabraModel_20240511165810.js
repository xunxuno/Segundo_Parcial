const palabraDB = require('../database/tables/operaciones');

class Palabra {
    constructor (id, id_usuario, palabra_original, idioma_original, idioma_destino, nueva_palabra, fecha_operacion) {
        this.id = id;
        this.id_usuario = id_usuario;
        this.palabra_original = palabra_original;
        this.idioma_original = idioma_original;
        this.idioma_destino = idioma_destino;
        this.nueva_palabra = nueva_palabra;
        this.fecha_operacion = fecha_operacion;
    }
}

async function obtenerTodos() {
    try {
        const palabra = await palabraDB.obtenerTodos();
        return palabra.map(palabra => new Palabra(palabra.id, palabra.id_usuario, palabra.palabra_original, palabra.idioma_original, palabra.idioma_destino, palabra.nueva_palabra, palabra.fecha_operacion));
    } catch (error){
        console.error('error al obtener el historial', error);
        throw error;
    }
}