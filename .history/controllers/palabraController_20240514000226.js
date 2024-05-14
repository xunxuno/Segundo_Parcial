const palabraModel = require('../models/palabraModel');
const { convertir } = require('../database/tables/operaciones');


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
                await convertir(usuario, palabraCache.textoOriginal, palabraCache.origen, palabraCache.destino, palabraCache.resultado);
                console.log('Datos enviados con éxito a la función convertir');

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
                let conversorCesar = palabraModel.descifradoCesar(palabraCache.texto, 4);
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
                let conversorCOC = palabraModel.descifradoCesar(palabraCache.texto, 4);
                textoBase64 = palabraModel.textoABase64(conversorCOC);
                // Almacena el texto original y el resultado en palabraCache
                palabraCache.textoOriginal = palabraCache.texto;
                palabraCache.resultado = textoBase64;
                palabraCache.origen = palabraCache.origen;
                palabraCache.destino = palabraCache.destino;
                console.log('coc-b64 exitoso');
                // Redirige a la página de resultado después de almacenar los datos en palabraCache
                res.redirect('/result');
                console.log('Texto Original:', palabraCache.textoOriginal);
                console.log('Resultado:', palabraCache.resultado);
                console.log('Origen:', palabraCache.origen);
                console.log('Destino:', palabraCache.destino);
                break;
            case 'hex':
                //funcion
                let conversorHex = palabraModel.descifradoCesar(palabraCache.texto, 4);
                textoHex = palabraModel.textoAHex(conversorHex);
                palabraCache.textoOriginal = palabraCache.texto;
                palabraCache.resultado = textoHex;
                palabraCache.origen = palabraCache.origen;
                palabraCache.destino = palabraCache.destino;
                console.log('coc-hex exitoso');
                // Redirige a la página de resultado después de almacenar los datos en palabraCache
                res.redirect('/result');
                console.log('Texto Original:', palabraCache.textoOriginal);
                console.log('Resultado:', palabraCache.resultado);
                console.log('Origen:', palabraCache.origen);
                console.log('Destino:', palabraCache.destino);
                break;
            case 'bin':
                //funcion
                let conversorBIN = palabraModel.descifradoCesar(palabraCache.texto, 4);
                textoBinario =palabraModel.textoABinario(conversorBIN);
                palabraCache.textoOriginal = palabraCache.texto;
                palabraCache.resultado = textoBinario;
                palabraCache.origen = palabraCache.origen;
                palabraCache.destino = palabraCache.destino;
                console.log('coc-bin exitoso');
                // Redirige a la página de resultado después de almacenar los datos en palabraCache
                res.redirect('/result');
                console.log('Texto Original:', palabraCache.textoOriginal);
                console.log('Resultado:', palabraCache.resultado);
                console.log('Origen:', palabraCache.origen);
                console.log('Destino:', palabraCache.destino);
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
                let conversorb64 = palabraModel.descifradoSustitucion(palabraCache.texto);
                textoBase64 = palabraModel.textoABase64(conversorb64);
                // Almacena el texto original y el resultado en palabraCache
                palabraCache.textoOriginal = palabraCache.texto;
                palabraCache.resultado = textoBase64;
                palabraCache.origen = palabraCache.origen;
                palabraCache.destino = palabraCache.destino;
                console.log('sus-b64 exitoso');
                // Redirige a la página de resultado después de almacenar los datos en palabraCache
                res.redirect('/result');
                console.log('Texto Original:', palabraCache.textoOriginal);
                console.log('Resultado:', palabraCache.resultado);
                console.log('Origen:', palabraCache.origen);
                console.log('Destino:', palabraCache.destino);
                break;
            case 'hex':
                //funcion
                let conversorhexa = palabraModel.descifradoSustitucion(palabraCache.texto);
                textoHex = palabraModel.textoAHex(conversorhexa);
                // Almacena el texto original y el resultado en palabraCache
                palabraCache.textoOriginal = palabraCache.texto;
                palabraCache.resultado = textoHex;
                palabraCache.origen = palabraCache.origen;
                palabraCache.destino = palabraCache.destino;
                console.log('sus-hex exitoso');
                // Redirige a la página de resultado después de almacenar los datos en palabraCache
                res.redirect('/result');
                console.log('Texto Original:', palabraCache.textoOriginal);
                console.log('Resultado:', palabraCache.resultado);
                console.log('Origen:', palabraCache.origen);
                console.log('Destino:', palabraCache.destino);
                break;
            case 'bin':
                //funcion
                let conversorbinario = palabraModel.descifradoSustitucion(palabraCache.texto);
                textoBinario =palabraModel.textoABinario(conversorbinario);
                // Almacena el texto original y el resultado en palabraCache
                palabraCache.textoOriginal = palabraCache.texto;
                palabraCache.resultado = textoBinario;
                palabraCache.origen = palabraCache.origen;
                palabraCache.destino = palabraCache.destino;
                console.log('sus-bin exitoso');
                // Redirige a la página de resultado después de almacenar los datos en palabraCache
                res.redirect('/result');
                console.log('Texto Original:', palabraCache.textoOriginal);
                console.log('Resultado:', palabraCache.resultado);
                console.log('Origen:', palabraCache.origen);
                console.log('Destino:', palabraCache.destino);
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
                let conversoerbase64 = palabraModel.base64ATexto(palabraCache.texto);
                cifradoaCesar = palabraModel.cifradoCesar(conversoerbase64, 4);
                // Almacena el texto original y el resultado en palabraCache
                palabraCache.textoOriginal = palabraCache.texto;
                palabraCache.resultado = cifradoaCesar;
                palabraCache.origen = palabraCache.origen;
                palabraCache.destino = palabraCache.destino;
                console.log('b54-coc exitoso');
                // Redirige a la página de resultado después de almacenar los datos en palabraCache
                res.redirect('/result');
                console.log('Texto Original:', palabraCache.textoOriginal);
                console.log('Resultado:', palabraCache.resultado);
                console.log('Origen:', palabraCache.origen);
                console.log('Destino:', palabraCache.destino);
                break;
            case 'sus':
                //funcion
                let convertidorsus = palabraModel.base64ATexto(palabraCache.texto);
                cifradoaSustitucion = palabraModel.cifradoSustitucion(convertidorsus);
                // Almacena el texto original y el resultado en palabraCache
                palabraCache.textoOriginal = palabraCache.texto;
                palabraCache.resultado = cifradoaSustitucion;
                palabraCache.origen = palabraCache.origen;
                palabraCache.destino = palabraCache.destino;
                console.log('b64-sus exitoso');
                // Redirige a la página de resultado después de almacenar los datos en palabraCache
                res.redirect('/result');
                console.log('Texto Original:', palabraCache.textoOriginal);
                console.log('Resultado:', palabraCache.resultado);
                console.log('Origen:', palabraCache.origen);
                console.log('Destino:', palabraCache.destino);
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
                let conversorhexad = palabraModel.base64ATexto(palabraCache.texto);
                textoHex = palabraModel.textoAHex(conversorhexad);
                // Almacena el texto original y el resultado en palabraCache
                palabraCache.textoOriginal = palabraCache.texto;
                palabraCache.resultado = textoHex;
                palabraCache.origen = palabraCache.origen;
                palabraCache.destino = palabraCache.destino;
                console.log('b64-hex exitoso');
                // Redirige a la página de resultado después de almacenar los datos en palabraCache
                res.redirect('/result');
                console.log('Texto Original:', palabraCache.textoOriginal);
                console.log('Resultado:', palabraCache.resultado);
                console.log('Origen:', palabraCache.origen);
                console.log('Destino:', palabraCache.destino);
                break;
            case 'bin':
                //funcion
                let conversorbina = palabraModel.base64ATexto(palabraCache.texto);
                textoBinario =palabraModel.textoABinario(conversorbina);
                // Almacena el texto original y el resultado en palabraCache
                palabraCache.textoOriginal = palabraCache.texto;
                palabraCache.resultado = textoBinario;
                palabraCache.origen = palabraCache.origen;
                palabraCache.destino = palabraCache.destino;
                console.log('b54-bin exitoso');
                // Redirige a la página de resultado después de almacenar los datos en palabraCache
                res.redirect('/result');
                console.log('Texto Original:', palabraCache.textoOriginal);
                console.log('Resultado:', palabraCache.resultado);
                console.log('Origen:', palabraCache.origen);
                console.log('Destino:', palabraCache.destino);
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
                let conversorhe = palabraModel.hexAtexto(palabraCache.texto);
                cifradoaCesar = palabraModel.cifradoCesar(conversorhe, 4);
                // Almacena el texto original y el resultado en palabraCache
                palabraCache.textoOriginal = palabraCache.texto;
                palabraCache.resultado = cifradoaCesar;
                palabraCache.origen = palabraCache.origen;
                palabraCache.destino = palabraCache.destino;
                console.log('hex-coc exitoso');
                // Redirige a la página de resultado después de almacenar los datos en palabraCache
                res.redirect('/result');
                console.log('Texto Original:', palabraCache.textoOriginal);
                console.log('Resultado:', palabraCache.resultado);
                console.log('Origen:', palabraCache.origen);
                console.log('Destino:', palabraCache.destino);
                break;
            case 'sus':
                //funcion
                let conversorsuss = palabraModel.hexAtexto(palabraCache.texto);
                cifradoaSustitucion = palabraModel.cifradoSustitucion(conversorsuss);
                // Almacena el texto original y el resultado en palabraCache
                palabraCache.textoOriginal = palabraCache.texto;
                palabraCache.resultado = cifradoaSustitucion;
                palabraCache.origen = palabraCache.origen;
                palabraCache.destino = palabraCache.destino;
                console.log('hex-sus exitoso');
                // Redirige a la página de resultado después de almacenar los datos en palabraCache
                res.redirect('/result');
                console.log('Texto Original:', palabraCache.textoOriginal);
                console.log('Resultado:', palabraCache.resultado);
                console.log('Origen:', palabraCache.origen);
                console.log('Destino:', palabraCache.destino);
                break;
            case 'b64':
                //funcion
                let conversorbb64 = palabraModel.hexAtexto(palabraCache.texto);
                textoBase64 = palabraModel.textoABase64(conversorbb64);
                // Almacena el texto original y el resultado en palabraCache
                palabraCache.textoOriginal = palabraCache.texto;
                palabraCache.resultado = textoBase64;
                palabraCache.origen = palabraCache.origen;
                palabraCache.destino = palabraCache.destino;
                console.log('hex-b64 exitoso');
                // Redirige a la página de resultado después de almacenar los datos en palabraCache
                res.redirect('/result');
                console.log('Texto Original:', palabraCache.textoOriginal);
                console.log('Resultado:', palabraCache.resultado);
                console.log('Origen:', palabraCache.origen);
                console.log('Destino:', palabraCache.destino);
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
                let conversorbinbin = palabraModel.hexAtexto(palabraCache.texto);
                textoBinario =palabraModel.textoABinario(conversorbinbin);
                // Almacena el texto original y el resultado en palabraCache
                palabraCache.textoOriginal = palabraCache.texto;
                palabraCache.resultado = textoBinario;
                palabraCache.origen = palabraCache.origen;
                palabraCache.destino = palabraCache.destino;
                console.log('hex-bin exitoso');
                // Redirige a la página de resultado después de almacenar los datos en palabraCache
                res.redirect('/result');
                console.log('Texto Original:', palabraCache.textoOriginal);
                console.log('Resultado:', palabraCache.resultado);
                console.log('Origen:', palabraCache.origen);
                console.log('Destino:', palabraCache.destino);
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
                let conversorcococc = palabraModel.binarioATexto(palabraCache.texto);
                cifradoaCesar = palabraModel.cifradoCesar(conversorcococc, 4);
                // Almacena el texto original y el resultado en palabraCache
                palabraCache.textoOriginal = palabraCache.texto;
                palabraCache.resultado = cifradoaCesar;
                palabraCache.origen = palabraCache.origen;
                palabraCache.destino = palabraCache.destino;
                console.log('bin-coc exitoso');
                // Redirige a la página de resultado después de almacenar los datos en palabraCache
                res.redirect('/result');
                console.log('Texto Original:', palabraCache.textoOriginal);
                console.log('Resultado:', palabraCache.resultado);
                console.log('Origen:', palabraCache.origen);
                console.log('Destino:', palabraCache.destino);
                break;
            case 'sus':
                //funcion
                let conversorsusu = palabraModel.binarioATexto(palabraCache.texto);
                cifradoaSustitucion = palabraModel.cifradoSustitucion(conversorsusu);
                // Almacena el texto original y el resultado en palabraCache
                palabraCache.textoOriginal = palabraCache.texto;
                palabraCache.resultado = cifradoaSustitucion;
                palabraCache.origen = palabraCache.origen;
                palabraCache.destino = palabraCache.destino;
                console.log('bin-sus exitoso');
                // Redirige a la página de resultado después de almacenar los datos en palabraCache
                res.redirect('/result');
                console.log('Texto Original:', palabraCache.textoOriginal);
                console.log('Resultado:', palabraCache.resultado);
                console.log('Origen:', palabraCache.origen);
                console.log('Destino:', palabraCache.destino);
                break;
            case 'b64':
                //funcion
                let conversor6469 = palabraModel.binarioATexto(palabraCache.texto);
                textoBase64 = palabraModel.textoABase64(conversor6469);
                // Almacena el texto original y el resultado en palabraCache
                palabraCache.textoOriginal = palabraCache.texto;
                palabraCache.resultado = textoBase64;
                palabraCache.origen = palabraCache.origen;
                palabraCache.destino = palabraCache.destino;
                console.log('bin-b64 exitoso');
                // Redirige a la página de resultado después de almacenar los datos en palabraCache
                res.redirect('/result');
                console.log('Texto Original:', palabraCache.textoOriginal);
                console.log('Resultado:', palabraCache.resultado);
                console.log('Origen:', palabraCache.origen);
                console.log('Destino:', palabraCache.destino);
                break;
            case 'hex':
                //funcion
                let conversorhexafm = palabraModel.binarioATexto(palabraCache.texto);
                textoHex = palabraModel.textoAHex(conversorhexafm);
                // Almacena el texto original y el resultado en palabraCache
                palabraCache.textoOriginal = palabraCache.texto;
                palabraCache.resultado = textoHex;
                palabraCache.origen = palabraCache.origen;
                palabraCache.destino = palabraCache.destino;
                console.log('bin-hex exitoso');
                // Redirige a la página de resultado después de almacenar los datos en palabraCache
                res.redirect('/result');
                console.log('Texto Original:', palabraCache.textoOriginal);
                console.log('Resultado:', palabraCache.resultado);
                console.log('Origen:', palabraCache.origen);
                console.log('Destino:', palabraCache.destino);
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