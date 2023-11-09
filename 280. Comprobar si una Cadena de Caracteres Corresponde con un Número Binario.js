// Ejercicio 280: Comprobar si una Cadena de Caracteres Corresponde con un Número Binario.

let patron = /[01]+$/;
let verificarBinario = new RegExp(patron);
let cadena = "10111";
console.log(verificarBinario.test(cadena)); //true

cadena = "10012";
console.log(verificarBinario.test(cadena)); //false
