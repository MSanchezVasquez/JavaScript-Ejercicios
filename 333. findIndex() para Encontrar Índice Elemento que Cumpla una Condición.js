// Ejercicio 333: findIndex() para Encontrar Índice Elemento que Cumpla una Condición.

let numeros = [13, 5, 89, 5, 4, 29, 23, 22, 14, 10, 8, 114, 41, 12];

let indice = numeros.findIndex((n) => {
  return n > 100;
});

if (indice != -1) {
  console.log(indice); //11
  console.log(numeros[indice]); //114
} else {
  console.log("No se ha encontrado ningún elemento que cumpla la condición");
}
