/*
* La funcion "Like" recibe como parametro un numero en formato string
* este identificara el numero de post 
*/
function like(n) {
    //Guardamos el innerText de los likes con el selector id "number" seguido de el numero de post
    // Luego lo parseamos de texto a entero
    var number = parseInt($('#number' + n).text())

    //Sumamos mas uno al valor de likes actual
    number += 1
    
    //Sobreescribimos el valor antiguo de likes por el nuevo
    $('#number' + n).text(number)
}
