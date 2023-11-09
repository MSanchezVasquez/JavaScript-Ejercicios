// Ejercicio 63: Uso del método fromCharCode para crear cadenas UTF.

let cadena = "\u0041";
console.log(cadena); //A
console.log(String.fromCharCode(0x41)); //A
console.log(String.fromCharCode(0x41, 0x42, 0x43)); //ABC
