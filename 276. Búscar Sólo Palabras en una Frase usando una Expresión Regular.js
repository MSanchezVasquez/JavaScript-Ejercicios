// Ejercicio 276: Búscar Sólo Palabras en una Frase usando una Expresión Regular.

let frase = "JavaScript es un lenguaje de programacion.";
let patron = /[a-zA-Z]+/g;
let resultado = frase.match(patron);
console.log(resultado); //[ 'JavaScript', 'es', 'un', 'lenguaje', 'de', 'programacion' ]
