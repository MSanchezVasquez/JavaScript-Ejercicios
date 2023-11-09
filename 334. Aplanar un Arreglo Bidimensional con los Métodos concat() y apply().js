// Ejercicio 334: Aplanar un Arreglo Bidimensional con los Métodos concat() y apply().

let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];
let resultado1 = matriz[0].concat(matriz[1], matriz[2], matriz[3]);
console.log(resultado1); /* [
   1,  2, 3, 4,  5,
   6,  7, 8, 9, 10,
  11, 12
] */
console.log(resultado1.length); //12

console.log();
let resultado2 = matriz.concat.apply([], matriz);
console.log(resultado1); /* [
   1,  2, 3, 4,  5,
   6,  7, 8, 9, 10,
  11, 12
] */
console.log(resultado1.length); //12
