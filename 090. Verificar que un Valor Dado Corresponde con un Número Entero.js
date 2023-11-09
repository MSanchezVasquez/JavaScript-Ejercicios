// Ejercicio 090: Verificar si un valor dado corresponde con un numero entero

let valor = 1;

console.log(Number.isInteger(valor)); //true

valor = "1";
console.log(Number.isInteger(valor)); //false - Tambien comprueba el tipo de dato

valor = NaN;
console.log(Number.isInteger(valor)); //false

valor = undefined;
console.log(Number.isInteger(valor)); //false

console.log();
valor = 1.4142;
console.log(Number.isInteger(valor)); //false

valor = "JS";
console.log(Number.isInteger(valor)); //false
