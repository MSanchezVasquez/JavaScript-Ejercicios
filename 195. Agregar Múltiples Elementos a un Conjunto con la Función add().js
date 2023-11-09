// Ejercicio 195: Agregar Múltiples Elementos a un Conjunto con la Función add().

let numeros = new Set();
numeros.add(1);
numeros.add(2);
numeros.add(3);
numeros.add(4);
numeros.add(5);
console.log(numeros); //Set(5) { 1, 2, 3, 4, 5 }
console.log("-------------------");
numeros.clear();
console.log(numeros); //Set(0) {}
numeros.add(1).add(2).add(3).add(4).add(5);
console.log(numeros); //Set(5) { 1, 2, 3, 4, 5 }
