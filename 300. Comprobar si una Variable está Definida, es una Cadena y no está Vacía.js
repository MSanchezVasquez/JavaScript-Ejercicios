// Ejercicio 300: Comprobar si una Variable está Definida, es una Cadena y no está Vacía.

function validarVariable(cadena) {
  return typeof cadena == "string" && cadena.length > 0;
}

console.log(validarVariable("JavaScript")); //true
console.log(validarVariable("")); //false
console.log(validarVariable(nombre)); //ReferenceError: nombre is not defined
