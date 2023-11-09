// Ejercicio 109: Construir un Objeto Date a partir de una cadena de caracteres.

let cadena = "May 21, 1998";
let fecha = new Date(cadena);
console.log(typeof fecha); //object
console.log(fecha instanceof Date); //true
console.log(fecha);
