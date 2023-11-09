// Ejercicio 72: Encontrar la posición en la que se halla una palabra.

let cadena = "La version mas reciente JavaScript es ES6";
let indice = cadena.indexOf("JavaScript");
console.log(indice); //24
console.log();
indice = cadena.indexOf("javaScript");
console.log(indice); //-1 : la palabra javaScript no esta en la cadena.
