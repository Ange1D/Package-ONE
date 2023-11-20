module.exports = function descifrar(message) {
    let mensajeDescifrado = "";
    const validarMensaje = require('./validarMensaje')

    if(validarMensaje(message)){
        
        mensajeDescifrado = message.replace(/enter/g, "e");
        mensajeDescifrado = mensajeDescifrado.replace(/imes/g, "i");
        mensajeDescifrado = mensajeDescifrado.replace(/ai/g, "a");
        mensajeDescifrado = mensajeDescifrado.replace(/ober/g, "o");
        mensajeDescifrado = mensajeDescifrado.replace(/ufat/g, "u");

    }else{

        mensajeDescifrado = "Message contains unsupported characters";

    }

    return mensajeDescifrado;
}