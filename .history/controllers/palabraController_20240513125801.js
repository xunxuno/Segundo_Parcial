const palabraModel = require('../models/palabraModel');

const palabraCache = {};

// Manejar la solicitud POST y dirigirla al controlador
const procesarDatos = (req, res) => {
    console.log('Inicio de procesarDatos');
    // Capturar los datos del formulario y almacenarlos en palabraCache
    palabraCache.texto = req.body.texto;
    palabraCache.origen = req.body.origen;
    palabraCache.destino = req.body.destino;
    console.log('datos recibidos');


 // Llamar a la función correspondiente según las selecciones del usuario
 switch (palabraCache.origen) {
    case 'es':
        switch (palabraCache.destino) {
            case 'coc':
                //funcion
                let cifradoaCesar = palabraModel.cifradoCesar(palabraCache.texto, 4);
                // Almacena el texto original y el resultado en palabraCache
                palabraCache.textoOriginal = palabraCache.texto;
                palabraCache.resultado = cifradoaCesar;
                palabraCache.origen = palabraCache.origen;
                palabraCache.destino = palabraCache.destino;
                console.log('esp-coc exitoso');
                // Redirige a la página de resultado después de almacenar los datos en palabraCache
                res.redirect('/result');
                console.log('Texto Original:', palabraCache.textoOriginal);
                console.log('Resultado:', palabraCache.resultado);
                console.log('Origen:', palabraCache.origen);
                console.log('Destino:', palabraCache.destino);
                break;
            case 'sus':
                //funcion
                let cifradoaSustitucion = palabraModel.cifradoSustitucion(palabraCache.texto);
                // Almacena el texto original y el resultado en palabraCache
                palabraCache.textoOriginal = palabraCache.texto;
                palabraCache.resultado = cifradoaSustitucion;
                palabraCache.origen = palabraCache.origen;
                palabraCache.destino = palabraCache.destino;
                console.log('esp-sus exitoso');
                // Redirige a la página de resultado después de almacenar los datos en palabraCache
                res.redirect('/result');
                console.log('Texto Original:', palabraCache.textoOriginal);
                console.log('Resultado:', palabraCache.resultado);
                console.log('Origen:', palabraCache.origen);
                console.log('Destino:', palabraCache.destino);
                break;
            case 'b64':
                //funcion
                let textoBase64 = palabraModel.textoABase64(palabraCache.texto);
                // Almacena el texto original y el resultado en palabraCache
                palabraCache.textoOriginal = palabraCache.texto;
                palabraCache.resultado = textoBase64;
                palabraCache.origen = palabraCache.origen;
                palabraCache.destino = palabraCache.destino;
                console.log('esp-b64 exitoso');
                // Redirige a la página de resultado después de almacenar los datos en palabraCache
                res.redirect('/result');
                console.log('Texto Original:', palabraCache.textoOriginal);
                console.log('Resultado:', palabraCache.resultado);
                console.log('Origen:', palabraCache.origen);
                console.log('Destino:', palabraCache.destino);
                break;

            case 'hex':
                //funcion
                let textoHex = palabraModel.textoAHex(palabraCache.texto);
                // Almacena el texto original y el resultado en palabraCache
                palabraCache.textoOriginal = palabraCache.texto;
                palabraCache.resultado = textoHex;
                palabraCache.origen = palabraCache.origen;
                palabraCache.destino = palabraCache.destino;
                console.log('esp-hex exitoso');
                // Redirige a la página de resultado después de almacenar los datos en palabraCache
                res.redirect('/result');
                console.log('Texto Original:', palabraCache.textoOriginal);
                console.log('Resultado:', palabraCache.resultado);
                console.log('Origen:', palabraCache.origen);
                console.log('Destino:', palabraCache.destino);
                break;
            case 'bin':
                //funcion
                let textoBinario =palabraModel.textoABinario(palabraCache.texto);
                // Almacena el texto original y el resultado en palabraCache
                palabraCache.textoOriginal = palabraCache.texto;
                palabraCache.resultado = textoBinario;
                palabraCache.origen = palabraCache.origen;
                palabraCache.destino = palabraCache.destino;
                console.log('es-bin exitoso');
                // Redirige a la página de resultado después de almacenar los datos en palabraCache
                res.redirect('/result');
                console.log('Texto Original:', palabraCache.textoOriginal);
                console.log('Resultado:', palabraCache.resultado);
                console.log('Origen:', palabraCache.origen);
                console.log('Destino:', palabraCache.destino);
                break;
            default:
                console.log('error 1');
                break;
        }
        break;
    case 'coc':
        switch (palabraCache.destino) {
            case 'es':
                //funcion
                let descifradoaCesar =palabraModel.descifradoCesar(palabraCache.texto, 4);
                // Almacena el texto original y el resultado en palabraCache
                palabraCache.textoOriginal = palabraCache.texto;
                palabraCache.resultado = descifradoaCesar;
                palabraCache.origen = palabraCache.origen;
                palabraCache.destino = palabraCache.destino;
                console.log('coc-esp exitoso');
                // Redirige a la página de resultado después de almacenar los datos en palabraCache
                res.redirect('/result');
                console.log('Texto Original:', palabraCache.textoOriginal);
                console.log('Resultado:', palabraCache.resultado);
                console.log('Origen:', palabraCache.origen);
                console.log('Destino:', palabraCache.destino);
                break;
            case 'sus':
                //funcion
                let conversorCesar =palabraModel.descifradoCesar(palabraCache.texto, 4);
                cifradoaSustitucion = palabraModel.cifradoSustitucion(conversorCesar);
                // Almacena el texto original y el resultado en palabraCache
                palabraCache.textoOriginal = palabraCache.texto;
                palabraCache.resultado = cifradoaSustitucion;
                palabraCache.origen = palabraCache.origen;
                palabraCache.destino = palabraCache.destino;
                console.log('coc-sus exitoso');
                // Redirige a la página de resultado después de almacenar los datos en palabraCache
                res.redirect('/result');
                console.log('Texto Original:', palabraCache.textoOriginal);
                console.log('Resultado:', palabraCache.resultado);
                console.log('Origen:', palabraCache.origen);
                console.log('Destino:', palabraCache.destino);


                
                break;
            case 'b64':
                //funcion
                break;
            case 'hex':
                //funcion
                break;
            case 'bin':
                //funcion
                break;
            default:
                console.log('error 2');
                break;
        }
        break;
    case 'sus':
        switch (palabraCache.destino) {
            case 'coc':
                //funcion
                let conversorSUS = palabraModel.descifradoSustitucion(palabraCache.texto);
                cifradoaCesar  = palabraModel.cifradoCesar(conversorSUS);
                // Almacena el texto original y el resultado en palabraCache
                palabraCache.textoOriginal = palabraCache.texto;
                palabraCache.resultado = cifradoaCesar;
                palabraCache.origen = palabraCache.origen;
                palabraCache.destino = palabraCache.destino;
                console.log('sus-coc exitoso');
                // Redirige a la página de resultado después de almacenar los datos en palabraCache
                res.redirect('/result');
                console.log('Texto Original:', palabraCache.textoOriginal);
                console.log('Resultado:', palabraCache.resultado);
                console.log('Origen:', palabraCache.origen);
                console.log('Destino:', palabraCache.destino);

                break;
            case 'es':
                //funcion
                let descifradoaSustitucion = palabraModel.descifradoSustitucion(palabraCache.texto);
                // Almacena el texto original y el resultado en palabraCache
                palabraCache.textoOriginal = palabraCache.texto;
                palabraCache.resultado = descifradoaSustitucion;
                palabraCache.origen = palabraCache.origen;
                palabraCache.destino = palabraCache.destino;
                console.log('sus-esp exitoso');
                // Redirige a la página de resultado después de almacenar los datos en palabraCache
                res.redirect('/result');
                console.log('Texto Original:', palabraCache.textoOriginal);
                console.log('Resultado:', palabraCache.resultado);
                console.log('Origen:', palabraCache.origen);
                console.log('Destino:', palabraCache.destino);
                break;
            case 'b64':
                //funcion
                break;
            case 'hex':
                //funcion
                break;
            case 'bin':
                //funcion
                break;
            default:
                console.log('error 3');
                break;
        }
        break;
    case 'b64':
        switch (palabraCache.destino) {
            case 'coc':
                //funcion
                break;
            case 'sus':
                //funcion
                break;
            case 'es':
                //funcion
                let base64Texto = palabraModel.base64ATexto(palabraCache.texto);
                // Almacena el texto original y el resultado en palabraCache
                palabraCache.textoOriginal = palabraCache.texto;
                palabraCache.resultado = base64Texto;
                palabraCache.origen = palabraCache.origen;
                palabraCache.destino = palabraCache.destino;
                console.log('b64-es exitoso');
                // Redirige a la página de resultado después de almacenar los datos en palabraCache
                res.redirect('/result');
                console.log('Texto Original:', palabraCache.textoOriginal);
                console.log('Resultado:', palabraCache.resultado);
                console.log('Origen:', palabraCache.origen);
                console.log('Destino:', palabraCache.destino);
                break;
            case 'hex':
                //funcion
                break;
            case 'bin':
                //funcion
                break;
            default:
                console.log('error 4');
                break;
        }
        break;
    case 'hex':
        switch (palabraCache.destino) {
            case 'coc':
                //funcion
                break;
            case 'sus':
                //funcion
                break;
            case 'b64':
                //funcion
                break;
            case 'es':
                //funcion
                let hextexto = palabraModel.hexAtexto(palabraCache.texto);
                // Almacena el texto original y el resultado en palabraCache
                palabraCache.textoOriginal = palabraCache.texto;
                palabraCache.resultado = hextexto;
                palabraCache.origen = palabraCache.origen;
                palabraCache.destino = palabraCache.destino;
                console.log('hex-es exitoso');
                // Redirige a la página de resultado después de almacenar los datos en palabraCache
                res.redirect('/result');
                console.log('Texto Original:', palabraCache.textoOriginal);
                console.log('Resultado:', palabraCache.resultado);
                console.log('Origen:', palabraCache.origen);
                console.log('Destino:', palabraCache.destino);
                break;
            case 'bin':
                //funcion
                break;
            default:
                console.log('error 5');
                break;
        }
        break;
    case 'bin':
        switch (palabraCache.destino) {
            case 'coc':
                //funcion
                break;
            case 'sus':
                //funcion
                break;
            case 'b64':
                //funcion
                break;
            case 'hex':
                //funcion
                break;
            case 'es':
                //funcion
                let binariATexto = palabraModel.binarioATexto(palabraCache.texto);
                // Almacena el texto original y el resultado en palabraCache
                palabraCache.textoOriginal = palabraCache.texto;
                palabraCache.resultado = binariATexto;
                palabraCache.origen = palabraCache.origen;
                palabraCache.destino = palabraCache.destino;
                console.log('bin-es exitoso');
                // Redirige a la página de resultado después de almacenar los datos en palabraCache
                res.redirect('/result');
                console.log('Texto Original:', palabraCache.textoOriginal);
                console.log('Resultado:', palabraCache.resultado);
                console.log('Origen:', palabraCache.origen);
                console.log('Destino:', palabraCache.destino);
                break;
            default:
                console.log('error 6');
                break;
        }
        break;
    default:
        console.log('error 7');
        break;
}
};
module.exports = { procesarDatos, palabraCache }; 