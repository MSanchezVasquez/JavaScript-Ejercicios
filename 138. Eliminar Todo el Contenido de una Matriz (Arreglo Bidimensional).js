// Ejercicio 138: Eliminar Todo el Contenido de una Matriz (Arreglo Bidimensional)

let numeros = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(numeros); //[[ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ]]

//Metodo 1:
numeros = [];
console.log(numeros); //[]
console.log("--------------------------------------------");
//Metodo 2:
numeros = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(numeros); //[[ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ]]
numeros.length = 0;
console.log(numeros); //[]
