const palabraModel = require('../models/palabraModel');

const palabraCache = {};

// Manejar la solicitud POST y dirigirla al controlador
const procesarDatos = (req, res) => {
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
                break;
            case 'sus':
                //funcion
                break;
            case 'b64':
                //funcion
                let textoBase64 =  palabraModel.textoABase64(palabraCache.texto);
                // Almacena el texto original y el resultado en palabraCache
                palabraCache.textoOriginal = palabraCache.texto;
                palabraCache.resultado = textoBase64;
                palabraCache.origen = palabraCache.origen;
                palabraCache.destino = palabraCache.destino;
                // Redirige a la página de resultado
                res.redirect('/result');
                console.log('b64 exitoso');
                break;
            case 'hex':
                //funcion
                break;
            case 'bin':
                //funcion
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
                break;
            case 'es':
                //funcion
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
module.exports = { procesarDatos };