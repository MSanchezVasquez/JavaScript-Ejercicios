// Ejercicio 168: Encontrar las Ocurrencias de los Elementos de un Arreglo con forEach.

let numeros = [1, 1, 2, 2, 3, 3, 3, 3, 4, 5, 5, 5, 6, 7, 8];
let conteo = {};
let numeroOcurrencias = numeros.forEach((valor) => {
  if (conteo[valor]) {
    conteo[valor] += 1;
  } else {
    conteo[valor] = 1;
  }
});

console.log(numeros);
console.log(conteo); //{ '1': 2, '2': 2, '3': 4, '4': 1, '5': 3, '6': 1, '7': 1, '8': 1 }
