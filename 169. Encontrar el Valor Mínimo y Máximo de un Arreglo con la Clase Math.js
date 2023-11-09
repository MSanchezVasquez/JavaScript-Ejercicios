// Ejercicio 169: Encontrar el Valor Mínimo y Máximo de un Arreglo con la Clase Math.

let numeros = [3, 2, 7, 5, -1, 0, 11, 13, 6, 19, 1];

let valorMinimo = Math.min.apply(null, numeros);
console.log(valorMinimo); //-1

let valorMaximo = Math.max.apply(null, numeros);
console.log(valorMaximo); //19
