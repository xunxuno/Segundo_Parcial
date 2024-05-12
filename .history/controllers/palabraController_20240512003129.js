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
}


 ////////
 /*switch(origen) {
    case 'es':
        console.log('Texto original:', texto);
        break;
    case 'b64':
        let textoDecodificado = base64ATexto(texto);
        console.log('Texto decodificado de Base64:', textoDecodificado);
        break;
    default:
        console.log('Origen no válido');
}

switch(destino) {
    case 'b64':
        let textoEnBase64 = textoABase64(texto);
        console.log('Texto en Base64:', textoEnBase64);
        break;
    case 'es':
        console.log('Texto en español:', texto);
        break;
    default:
        console.log('Destino no válido');
}*/