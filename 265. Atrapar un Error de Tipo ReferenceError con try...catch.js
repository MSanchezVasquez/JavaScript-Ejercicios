// Ejercicio 265: Atrapar un Error de Tipo ReferenceError con try...catch.

try {
  let resultado = 5 / a;
} catch (ReferenceError) {
  console.log("Se ha producido una excepcion ReferenceError");
}
//El programa puede seguir ejecutando a pesar de encontrar el error.
console.log("...");
