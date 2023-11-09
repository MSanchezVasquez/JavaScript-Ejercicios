// Ejercicio 113: Calcular la Edad de una Persona con Objetos Date.

let fechaNacimiento = new Date("12/19/2000");
let ahora = new Date();
let anios = ahora.getFullYear() - fechaNacimiento.getFullYear();
console.log(anios);
