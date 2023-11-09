// Ejercicio 089: Validar si un numero es finito con isFinite.

let numero = 1;

console.log(isFinite(numero)); //true

numero = 1 / 0;
console.log(numero); //Infinity
console.log(isFinite(numero)); //false

console.log();
console.log(isFinite(NaN)); //false
console.log(isFinite(null)); //true
console.log(isFinite(undefined)); //false
