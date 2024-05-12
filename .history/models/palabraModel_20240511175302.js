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



// Historial 
async function obtenerHistorial() {
    try {
        const palabra = await palabraDB.obtenerHistorial();
        return palabra.map(palabra => new Palabra(palabra.id, palabra.id_usuario, palabra.palabra_original, palabra.idioma_original, palabra.idioma_destino, palabra.nueva_palabra, palabra.fecha_operacion));
    } catch (error){
        console.error('error al obtener el historial', error);
        throw error;
    }
}

/////////////////////////////// zona de cifrado ///////////////////////////////////////

// españoll a cesar

function cifradoCesar(palabra, desplazamiento) {
    let palabraEncriptada = '';
  
    for (let i = 0; i < palabra.length; i++) {
      let caracter = palabra[i];
  
      // Verifica si el caracter es una letra del alfabeto
      if (caracter.match(/[a-z]/i)) {
        // Obtiene el código ASCII del caracter
        let codigo = palabra.charCodeAt(i);
  
        // Mayúsculas
        if (codigo >= 65 && codigo <= 90) {
          caracter = String.fromCharCode(((codigo - 65 + desplazamiento) % 26) + 65);
        }
        // Minúsculas
        else if (codigo >= 97 && codigo <= 122) {
          caracter = String.fromCharCode(((codigo - 97 + desplazamiento) % 26) + 97);
        }
      }
  
      palabraEncriptada += caracter;
    }
  
    return palabraEncriptada;
  }
  
  // Ejemplo de uso
  let palabra = "hola";
  let desplazamiento = 3;
  let palabraEncriptada = cifradoCesar(palabra, desplazamiento);
  console.log("Palabra encriptada:", palabraEncriptada);

/////////////////////////////////////////////////////////////////////////////////////////  

/// cesar a español

function descifradoCesar(textoEncriptado, desplazamiento1) {
    let textoDescifrado = '';
  
    for (let i = 0; i < textoEncriptado.length; i++) {
      let caracter = textoEncriptado[i];
  
      // Verifica si el caracter es una letra del alfabeto
      if (caracter.match(/[a-z]/i)) {
        // Obtiene el código ASCII del caracter
        let codigo = textoEncriptado.charCodeAt(i);
  
        // Mayúsculas
        if (codigo >= 65 && codigo <= 90) {
          caracter = String.fromCharCode(((codigo - 65 - desplazamiento1 + 26) % 26) + 65);
        }
        // Minúsculas
        else if (codigo >= 97 && codigo <= 122) {
          caracter = String.fromCharCode(((codigo - 97 - desplazamiento1 + 26) % 26) + 97);
        }
      }
  
      textoDescifrado += caracter;
    }
  
    return textoDescifrado;
  }
  
  // Ejemplo de uso
  let textoEncriptado = "krod";
  let desplazamiento1 = 3;
  let textoDescifrado = descifradoCesar(textoEncriptado, desplazamiento);
  console.log("Texto descifrado:", textoDescifrado);
  
  /////////////////////////////////////////////////////////////////


  // de ESP a SUSTITUCION

  function cifradoSustitucion(palabra1, mapaSustitucion) {
    let palabraEncriptada1 = '';
  
    for (let i = 0; i < palabra1.length; i++) {
      let caracter = palabra1[i].toLowerCase(); // Convertimos a minúsculas para manejar mayúsculas y minúsculas
  
      // Verifica si el caracter es una letra del alfabeto
      if (caracter.match(/[a-z]/)) {
        // Busca el caracter en el mapa de sustitución
        let caracterEncriptado = mapaSustitucion[caracter];
  
        if (caracterEncriptado !== undefined) {
          // Si el caracter tiene una sustitución definida, lo agrega a la palabra encriptada
          palabraEncriptada1 += (palabra1[i] === palabra1[i].toUpperCase()) ? caracterEncriptado.toUpperCase() : caracterEncriptado;
        } else {
          // Si no hay sustitución definida, mantiene el caracter original
          palabraEncriptada1 += palabra1[i];
        }
      } else {
        // Si no es una letra del alfabeto, mantiene el caracter original
        palabraEncriptada1 += palabra1[i];
      }
    }
  
    return palabraEncriptada1;
  }
  
  // Ejemplo de uso
  let palabra1 = "hola mundo";
  let mapaSustitucion = {
    'a': '@',
    'b': '#',
    'c': '$',
    'd': '%',
    'e': '&',
    'f': '/',
    'g': '=',
    'h': '!',
    'i': '?',
    'j': '(',
    'k': ')',
    'l': '*',
    'm': '+',
    'n': '-',
    'o': '_',
    'p': '}',
    'q': '{',
    'r': '[',
    's': ']',
    't': '>',
    'u': '<',
    'v': '.',
    'w': ',',
    'x': ';',
    'y': ':',
    'z': '|'
  };
  
  let palabraEncriptada1 = cifradoSustitucion(palabra1, mapaSustitucion);
  console.log("Palabra encriptada:", palabraEncriptada1);
  