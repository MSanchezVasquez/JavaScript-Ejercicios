// Ejercicio 273: Buscar Números Enteros en un Texto con una Expresión Regular.

let texto = "La edad de Moises es 22. Hoy es 20 de agosto de 2023.";
let patron = /\d+/g;
let numeros = texto.match(patron).map(Number);
console.log(numeros); //[ 22, 20, 2023 ]
console.log(typeof numeros[0]); //number
