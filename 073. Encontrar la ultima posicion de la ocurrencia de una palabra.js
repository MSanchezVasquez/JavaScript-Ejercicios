// Ejercicio 73: Encontrar la ultima posicion de la ocurrencia de una palabra.

let cadena =
  "JavaScript es un lenguaje de programacion. La version mas reciente de JavaScript es ES6";

//indexOf
console.log(cadena.indexOf("JavaScript")); //posicio 0

//lastIndexOf
console.log(cadena.lastIndexOf("JavaScript")); //posicion 70
console.log(cadena.lastIndexOf("un")); //posicio 14
