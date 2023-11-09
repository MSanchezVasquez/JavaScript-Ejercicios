// Ejercicio 135: Acceder a los Elementos de una Matriz (Arreglo Bidimensional).

let matriz = new Array();
matriz.push([1, 2, 3]);
matriz.push([4, 5, 6]);
matriz.push([7, 8, 9]);

console.log(matriz.length); //cantidad de filas: 3
console.log(matriz); //[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
console.log(typeof matriz); //object
console.log(matriz instanceof Array); //true
console.log("-------------------------");
// Obtener toda una fila:
console.log(matriz[0]); //[ 1, 2, 3 ]
console.log(matriz[1]); //[ 4, 5, 6 ]
console.log(matriz[2]); //[ 7, 8, 9 ]
console.log("-------------------------");
// Obtener un elemento (1) de la matriz
console.log(matriz[0][0]); //1
console.log("-------------------------");
// Obtener un elemento (7) de la matriz
console.log(matriz[2][0]); //7
