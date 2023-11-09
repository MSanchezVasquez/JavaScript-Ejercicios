// Ejercicio 166: Sumar Todos los Elementos Numéricos de un Arreglo con reduceRight.

let numeros = [1, 2, 3, 4, 5];

let suma = numeros.reduceRight((anterior, actual) => {
  return anterior + actual;
});

console.log(suma); //15
