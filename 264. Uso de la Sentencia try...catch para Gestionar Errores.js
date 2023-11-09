// Ejercicio 264: Uso de la Sentencia try...catch para Gestionar Errores.

try {
  let numeros = new Array(-10);
} catch (RangeError) {
  console.log("Se ha producido un error.");
}
