// Ejercicio 167: Encontrar los Elementos Únicos de un Arreglo con la Función filter.

let numeros = [1, 2, 3, 3, 2, 4, 5, 5, 6, 6, 6, 7, 8];
console.log(numeros);

let numerosUnicos = numeros.filter((valor, indice, arreglo) => {
  return arreglo.indexOf(valor) == indice;
});

console.log(numerosUnicos);
