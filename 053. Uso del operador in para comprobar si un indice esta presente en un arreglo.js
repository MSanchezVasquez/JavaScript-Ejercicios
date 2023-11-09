// Ejercicio 53: Uso del operador in para comprobar si un indice esta presente en un arreglo.

let enteros = [5, 10, 15, 20];

console.log(enteros.length);
console.log(0 in enteros); //true
console.log(1 in enteros); //true
console.log(2 in enteros); //true
console.log(3 in enteros); //true
console.log(4 in enteros); //false
console.log(-1 in enteros); //false
