// Ejercicio 228: Enviar o Pasar Argumentos a una Función Generadora.

function* generarEnteros(limiteSuperior) {
  for (let i = 1; i <= limiteSuperior; i++) {
    yield i;
  }
}

let generador = generarEnteros(5);
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
