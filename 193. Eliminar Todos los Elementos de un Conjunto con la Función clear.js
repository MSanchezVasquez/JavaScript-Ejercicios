// Ejercicio 193: Eliminar Todos los Elementos de un Conjunto con la Función clear.

let numeros = new Set();
numeros.add(2);
numeros.add(4);
numeros.add(6);
numeros.add(8);
numeros.add(10);
console.log(numeros); //Set(5) { 2, 4, 6, 8, 10 }
console.log(numeros.size); //5
console.log("-------------------------");
numeros.clear();
console.log(numeros); //Set(0) {}
console.log(numeros.size); //0
