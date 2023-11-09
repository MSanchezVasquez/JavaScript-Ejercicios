// Ejercicio 305: Determinar Si Dos Palabras Están Separadas por n Cantidad de Espacio.

let frase = "Python 3.8.0";
let patron = /\w+\s+[0-9\.]+/g;
let resultado = frase.match(patron);
console.log(resultado); //[ 'Python 3.8.0' ]

frase = "Python            3.8.0";
resultado = frase.match(patron);
console.log(resultado); //[ 'Python            3.8.0' ]

frase = "Python3.8.0";
resultado = frase.match(patron);
console.log(resultado); //null
