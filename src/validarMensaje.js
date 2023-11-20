module.exports = function validarMensaje(message){
    const caracteresValidos = new RegExp('[a-zñ ]','g');
    return (message != "" && message.length > 0 && caracteresValidos.test(message));  
}