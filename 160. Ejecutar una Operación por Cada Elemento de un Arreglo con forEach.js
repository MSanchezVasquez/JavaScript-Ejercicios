// Ejercicio 160: Ejecutar una Operación por Cada Elemento de un Arreglo con forEach.

let numeros = [1, 2, 3, 4, 5, 6];

numeros.forEach((valor, indice, arreglo) => {
  console.log(valor);
  console.log(indice);
  console.log(arreglo);
});

console.log(numeros);
