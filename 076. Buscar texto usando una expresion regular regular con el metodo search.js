// Ejercicio 76: Buscar texto usando una expresion regular con el metodo search.

let cadena = "JavaScript es un lenguaje de programacion";
console.log(cadena.search("J"));
console.log(cadena.search("o"));
console.log(cadena.search(/\w+$/)); //29
console.log(cadena.indexOf("programacion")); //29
console.log();
cadena = "ECMAScript6";
console.log(cadena.search(/[^a-z]/i));
