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

// español a cesar

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
  
  
  /////////////////////////////////////////////////////////////////






  // de ESP a SUSTITUCION

  function cifradoSustitucion(palabra1) {
    let palabraEncriptada1 = '';

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
  
  
  
  
  ///////////////////////////////////////////////////////////////////////////






  // CIFRADO a ESP

  function cifradoSustitucion(textoOriginal) {
    let textoEncriptado = '';
    let mapaSustitucion2 = {
      '@': 'a',
      '#': 'b',
      '$': 'c',
      '%': 'd',
      '&': 'e',
      '/': 'f',
      '=': 'g',
      '!': 'h',
      '?': 'i',
      '(': 'j',
      ')': 'k',
      '*': 'l',
      '+': 'm',
      '-': 'n',
      '_': 'o',
      '}': 'p',
      '{': 'q',
      '[': 'r',
      ']': 's',
      '>': 't',
      '<': 'u',
      '.': 'v',
      ',': 'w',
      ';': 'x',
      ':': 'y',
      '|': 'z'
    };
  
    for (let i = 0; i < textoOriginal.length; i++) {
      let caracter = textoOriginal[i].toLowerCase(); // Convertimos a minúsculas para manejar mayúsculas y minúsculas
  
      // Verifica si el caracter es una letra del alfabeto
      if (caracter.match(/[a-z]/)) {
        // Busca el caracter en el mapa de sustitución
        let caracterEncriptado = mapaSustitucion2[caracter];
        
        if (caracterEncriptado !== undefined) {
          // Si encuentra el caracter en el mapa de sustitución, lo agrega al texto encriptado
          textoEncriptado += (textoOriginal[i] === textoOriginal[i].toUpperCase()) ? caracterEncriptado.toUpperCase() : caracterEncriptado;
        } else {
          // Si no encuentra el caracter en el mapa de sustitución, mantiene el caracter original
          textoEncriptado += textoOriginal[i];
        }
      } else {
        // Si no es una letra del alfabeto, mantiene el caracter original
        textoEncriptado += textoOriginal[i];
      }
    }
  
    return textoEncriptado;
  }
  

  

  //////////////////////////////////////////////////////////////////////////////////////////////

/// ESP a base 64

function textoABase64(texto) {
    // Convierte el texto a Base64
    let base64 = Buffer.from(texto).toString('base64');
    return base64;
  }
  



  /////////////////////////////////////////////////////////////////////////////////////////////////

  // Base64 a ESP

  function base64ATexto(textoEnBase64) {
    // Decodifica el texto Base64 a texto original
    let texto = Buffer.from(textoEnBase64, 'base64').toString('utf-8');
    return texto;
}

  


  
    /////////////////////////////////////////////////////////////////////////////////////////////////

// español a binario


function textoABinario(texto2) {
    // Convierte el texto a binario
    let binario = '';
    for (let i = 0; i < texto2.length; i++) {
      // Obtiene el código ASCII de cada caracter del texto
      let codigo = texto2.charCodeAt(i);
      // Convierte el código ASCII a binario y lo concatena a la cadena binaria
      binario += codigo.toString(2).padStart(8, '0');
    }
    return binario;
  }
  


  /////////////////////////////////////////////////////////////////////////////////////////////////////

  // binario a español

  function binarioATexto(binario) {
    let texto = '';
    // Divide la cadena binaria en bloques de 8 bits
    for (let i = 0; i < binario.length; i += 8) {
      let byte = binario.slice(i, i + 8); // Obtiene un byte de 8 bits
      let caracter = String.fromCharCode(parseInt(byte, 2)); // Convierte el byte binario a un caracter
      texto += caracter;
    }
    return texto;
  }
  

  
  //// texto a hexadecimal
  function textoAHex(texto) {
    let hex = '';
    for (let i = 0; i < texto.length; i++) {
        hex += '' + texto.charCodeAt(i).toString(16);
    }
    return hex;
}

//hexadecimal a texto
function hexAtexto(textoHex) {
  let texto = '';
  for (let i = 0; i < textoHex.length; i += 2) {
      texto += String.fromCharCode(parseInt(textoHex.substr(i, 2), 16));
  }
  return texto;
}
  
  module.exports = {
    textoABase64,
    base64ATexto,
    binarioATexto,
    textoABinario,
    textoAHex,
    hexAtexto,
    cifradoCesar,
    descifradoCesar,
    cifradoSustitucion,
    descifradoSustitucion
  };
  