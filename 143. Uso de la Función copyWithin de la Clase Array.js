// Ejercicio 143: Uso de la Función copyWithin de la Clase Array

const array1 = ["a", "b", "c", "d", "e"];

// Copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]
console.log("-----------------------------");
let numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros); //[ 1, 2, 3, 1, 2, 3 ]
numeros.copyWithin(3, 0);
console.log(numeros); //[ 1, 2, 3, 1, 2, 3 ]
