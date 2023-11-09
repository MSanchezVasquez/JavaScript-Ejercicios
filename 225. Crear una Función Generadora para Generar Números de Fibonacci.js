// Ejercicio 225: Crear una Función Generadora para Generar Números de Fibonacci.
// 0 1 1 2 3 5 8 13 21 34 55...

function* generarFibonacci() {
  yield 0;
  yield 1;

  let a = 0;
  let b = 1;

  while (true) {
    yield a + b;
    [a, b] = [b, a + b];
  }
}

let generador = generarFibonacci();
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
