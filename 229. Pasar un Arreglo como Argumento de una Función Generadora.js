// Ejercicio 229: Pasar un Arreglo como Argumento de una Función Generadora.

function* iterarValores(arreglo) {
  for (const e of arreglo) {
    yield e;
  }
}

let generador = iterarValores([2, 3, 5, 7, 11, 13]);
for (const e of generador) {
  console.log(e);
}

console.log(generador.next());
