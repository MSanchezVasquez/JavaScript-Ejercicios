// Ejercicio 129: Eliminar Elementos de un Arreglo por Medio de la Función filter.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let numerosImpares = numeros.filter((valor, indice, numeros) => {
  return valor % 2 == 1;
});

console.log(numeros);
console.log(numerosImpares);
