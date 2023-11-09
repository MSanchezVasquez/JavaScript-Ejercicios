// Ejercicio 70: Determinar si una cadena de caracteres empieza con una palabra específica.
// startsWith

let cadena = "Firefox es genial";
console.log(cadena.startsWith("Firefox")); //true
console.log(cadena.startsWith("firefox")); //false
console.log();
console.log(cadena.startsWith("Fire")); //true
console.log(cadena.startsWith("F")); //true
console.log(cadena.startsWith("es")); //false
