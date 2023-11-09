// Ejercicio 194: Recorrer Cada Uno de los Elementos de un Conjunto con un Iterador.

let numeros = new Set();
numeros.add(2);
numeros.add(4);
numeros.add(6);
numeros.add(8);
numeros.add(10);
console.log(numeros); //Set(5) { 2, 4, 6, 8, 10 }
console.log("---------------------------");
let iterador = numeros.values();
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
