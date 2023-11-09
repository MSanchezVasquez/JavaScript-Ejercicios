// Ejercicio 165: Sumar Todos los Elementos Numéricos de un Arreglo con reduce.

let numeros = [1, 2, 3, 4, 5];

let suma = numeros.reduce((anterior, actual) => {
  return anterior + actual;
});
console.log(numeros); //[ 1, 2, 3, 4, 5 ]
console.log(suma); //15
