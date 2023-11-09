// Ejercicio 246: Iterar un Arreglo con el Elemento Symbol.Iterator.

let numeros = [2, 3, 5, 7, 11];

for (const e of numeros) {
  console.log(e);
}

//Symbol.iterator
console.log("-------");
let iterador = numeros[Symbol.iterator]();
let iteracion = iterador.next();

while (!iteracion.done) {
  let valor = iteracion.value;
  console.log(valor);
  iteracion = iterador.next();
}
