// Ejercicio 77: Obtener una Sección de una Cadena de Caracteres a través de slice.

let cadena = "JavaScript es un lenguaje de programación.";

console.log(cadena.slice(4));
console.log(cadena.slice(-13));
console.log(cadena.slice(cadena.indexOf("es"), -17));
console.log(
  cadena.slice(cadena.indexOf("es"), -(cadena.length - cadena.indexOf("de")))
);
