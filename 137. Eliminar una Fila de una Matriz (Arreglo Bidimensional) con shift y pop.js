// Ejercicio 137: Eliminar una Fila de una Matriz (Arreglo Bidimensional) con shift y pop.

let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matriz.length); //3
console.log(matriz); //[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
console.log("---------------------------------------------");
let filaEliminada = matriz.shift();
console.log("Fila eliminada: ", filaEliminada);
console.log(matriz.length); //2
console.log(matriz); //[ [ 4, 5, 6 ], [ 7, 8, 9 ] ]
console.log("---------------------------------------------");
filaEliminada = matriz.pop();
console.log("Fila eliminada: ", filaEliminada);
console.log(matriz.length); //
console.log(matriz); //[[ 4, 5, 6 ]]
