// Ejercicio 218: Usar la Sentencia return para Retornar un Valor desde una Función.

function sumar(a, b) {
  return a + b;
}
console.log(sumar(5, 8)); //13
console.log("---------");
function mostrarMensaje(mensaje) {
  console.log(mensaje);
}
mostrarMensaje("JavaScript is awesome...");
console.log("---------");
function crearConjunto(lista) {
  let conjunto = new Set(lista);
  return conjunto;
}

console.log(crearConjunto([1, 2, 2, 3, 4, 5]));
