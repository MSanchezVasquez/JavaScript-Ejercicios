// Ejercicio 301: Mejora Comprobación si una Variable está Definida, es Cadena y no es Vacía.

function validarVariable(cadena) {
  return (
    typeof cadena != "unfefined" &&
    cadena != null &&
    cadena.length > 0 &&
    typeof cadena.valueOf() == "string"
  );
}

console.log(validarVariable("JavaScript")); //true
console.log(validarVariable(""));
console.log(validarVariable([2, 3, 5])); //false
