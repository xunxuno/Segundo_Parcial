const palabraController = require('../models/palabraModel');


 // Llamar a la función correspondiente según las selecciones del usuario
switch(origen) {
    case 'es':
        switch (destino) {
            case 'coc':
                //funcion
                break;
            case 'sus':
                //funcion
                break;
            case 'b64':
                //funcion
                let textoBase64 = textoABase64(texto);
                // Almacena el texto original y el resultado en palabraCache
                palabraCache.textoOriginal = texto;
                palabraCache.resultado = textoBase64;
                palabraCache.origen = origen;
                palabraCache.destino = destino;
                // Redirige a la página de resultado
                res.redirect('/resultado');
                break;
            case 'hex':
                //funcion
                break;
            case 'bin':
                //funcion
                break;
            default:
                console.log('error');
                break;
        }
    case 'coc':
        switch (destino) {
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
                console.log('error');
                break;
        }
    case 'sus':
        switch (destino) {
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
                console.log('error');
                break;
        }
    case 'b64':
        switch (destino) {
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
                console.log('error');
                break;
        }
    case 'hex':
        switch (destino) {
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
                console.log('error');
                break;
        }
    case 'bin':
        switch (destino) {
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
                console.log('error');
                break;
        }
        break;
    default:
        console.log('error');
        break;
}
