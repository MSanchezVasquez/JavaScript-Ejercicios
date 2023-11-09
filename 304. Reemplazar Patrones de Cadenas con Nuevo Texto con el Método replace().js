// Ejercicio 304: Reemplazar Patrones de Cadenas con Nuevo Texto con el Método replace().

let texto = "Koklin es tremendo. Python es genial.";
let expresionRegular = /\b[A-Z][a-z]{5}\b/g;
let resultado = texto.replace(expresionRegular, "JavaScript");
console.log(resultado); //JavaScript es tremendo. JavaScript es genial.
