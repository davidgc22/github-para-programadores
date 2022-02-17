/* /1) Programa una función que cuente el número de caracteres de una cadena de texto, 
    pe. miFuncion("Hola Mundo") devolverá 10.
    
    2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados,
    pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
    
    3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter,
    pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
    
    4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3)
    devolverá Hola Mundo Hola Mundo Hola Mundo.
    */
function contar(cadena) {
    if (cadena!="") {
        document.write(`La oracion tiene ${cadena.length} caracteres`);    
    } else {
        document.write("La oracion esta vacia");
    }
}
//contar("hola mundo");

function recorte(recortar,acortar) {
    if (recortar!="" && acortar<=recortar.length) {
        document.write(`La cadena hacido acortada a: ${recortar.substring(0,acortar)}`);
    }else if (acortar>=recortar.length) {
        document.write(`No se puede recortar por que la  "${acortar}" 
        es mas grande que la oracion de ${recortar.length}`);
    } else {
        document.write(`La oracion esta vacia`);
    }
}

//recorte("hola mundo",15);

function separa(cadena3,separador) {
    if (cadena3!="") {
        let separada=cadena3.split(separador);
        document.write(`La oracion es ${cadena3}.<br>`);
        document.write("El separador es ("+ separador+")<br>");
        document.write(`El arreglo tiene ${cadena3.length} elementos.<br>`);

        for (let i = 0; i < separada.length; i++) {
            document.write("posicion ["+i+"] "+separada[i]+"<br>");
            
        }
        console.log(separada);
        document.write(separada);

    } else {
        document.write("La oracion esta vacia");
    }       
}
// separa("Hola que tal"," ");
function repita(cadena2, rep) {
    if (cadena2!="") {
        let cadenaAux=cadena2.repeat(rep);
        document.write(cadenaAux);
    } else {
        document.write("La oracion esta vacia");
    }
}

repita ('Hola mundo ',3);