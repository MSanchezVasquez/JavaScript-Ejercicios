// Ejercicio 65: Uso de la función charCodeAt para obtener el valor numérico de un carácter.

let cadena = "A";

console.log(cadena.charCodeAt(0)); //65

cadena = "Ajax";
console.log(cadena.charCodeAt(1)); //106

cadena = "\u0041"; //A
console.log(cadena.charCodeAt(0)); //65

cadena = "\n"; //salto de linea
console.log(cadena.charCodeAt(0)); //10

cadena = "\t"; //tabulador
console.log(cadena.charCodeAt(0)); //9
