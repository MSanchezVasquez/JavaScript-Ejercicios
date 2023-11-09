// Ejercicio 275: Realizar una Búsqueda Condicional de Texto con una Expresión Regular.

let frase = "JavaScript es un lenguaje de programación.";
let patron = /JavaScript|C#/g;
let resultado = patron.exec(frase);
console.log(resultado);

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Cambia esta línea
let result = extractStr.match(codingRegex); // Cambia esta línea
console.log(result);
