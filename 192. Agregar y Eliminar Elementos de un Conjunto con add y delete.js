// Ejercicio 192: Agregar y Eliminar Elementos de un Conjunto con add y delete.

let numeros = new Set();
numeros.add(1);
numeros.add(2);
numeros.add(3);
numeros.add(3);
numeros.add(4);
numeros.add(5);
console.log(numeros); //Set(5) { 1, 2, 3, 4, 5 }
console.log(numeros.size); //5
console.log("------------------");
numeros.delete(3);
console.log(numeros); //Set(4) { 1, 2, 4, 5 }
console.log(numeros.size); //4

numeros.delete(4);
console.log(numeros); //Set(3) { 1, 2, 5 }
console.log(numeros.size); //3
