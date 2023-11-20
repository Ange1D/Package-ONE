module.exports = function cifrar(message){

    let mensajeCifrado = "";

    for (let letra of message) {

      switch (letra) {
        case "e":
            mensajeCifrado += "enter";
            break;
        case "i":
            mensajeCifrado += "imes";
            break;
        case "a":
            mensajeCifrado += "ai";
            break;
        case "o":
            mensajeCifrado += "ober";
            break;
        case "u":
            mensajeCifrado += "ufat";
            break;
        default:
            mensajeCifrado += letra;
            break;
         
      }
      
    }

    return mensajeCifrado;
};