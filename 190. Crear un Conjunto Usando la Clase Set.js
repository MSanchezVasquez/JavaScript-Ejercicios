// Ejercicio 190: Crear un Conjunto Usando la Clase Set.

let numeros = new Set();
console.log(typeof numeros); //object
console.log(numeros instanceof Set); //true

numeros.add(1);
numeros.add(2);
numeros.add(2);
numeros.add(3);
numeros.add(4);
numeros.add(4);
numeros.add(4);
numeros.add(4);
numeros.add(5);

console.log(numeros.size); //5. No se permiten elementos duplicados en un conjunto
console.log(numeros); //Set(5) { 1, 2, 3, 4, 5 }
