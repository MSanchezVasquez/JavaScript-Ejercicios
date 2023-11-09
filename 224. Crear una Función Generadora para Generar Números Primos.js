// Ejercicio 224: Crear una Función Generadora para Generar Números Primos.

function* generarNumerosPrimos() {
  let primo = 2;
  yield primo;

  while (true) {
    let numero = primo + 1;
    let contadorDivisores = 0;
    let i = 1;

    while (i <= numero) {
      if (numero % 1 == 0) {
        ++contadorDivisores;
      }
      if (contadorDivisores > 2) {
        break;
      }
      ++i;
    }
    if (contadorDivisores == 2) {
      primo = numero;
      yield primo;
    }
    ++primo;
  }
}

let generador = generarNumerosPrimos();
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
