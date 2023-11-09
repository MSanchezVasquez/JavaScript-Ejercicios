// Ejercicio 34: Ejemplo básico de una expresion regular.

let cadena = "¡JavaScript es genial!";

let regular = /Script/;

console.log(typeof regular);
console.log(regular instanceof RegExp);

console.log(regular.test(cadena));

console.log();
regular = /(\b\w+\b)+/g;

if (cadena.match(regular)) {
  let cantidadPalabras = cadena.match(regular).length;
  console.log("La variable cadena contiene " + cantidadPalabras + " palabras.");
} else {
  console.log("No hay palabras en la cadena probada.");
}
