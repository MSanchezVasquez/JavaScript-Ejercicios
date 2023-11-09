// Ejercicio 223: Crear un Función Generadora en ECMAScript 6 (ES6).

function* generarCadena() {
  yield "JavaScript";
  yield "is";
  yield "awesome!";
}

let objetoGenerador = generarCadena();

console.log(objetoGenerador.next());
console.log(objetoGenerador.next());
console.log(objetoGenerador.next());
console.log(objetoGenerador.next());
