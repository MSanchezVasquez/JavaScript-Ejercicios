// Ejercicio 75: Usar el metodo replace para reemplazar una cadena de caracteres.

let cadena = "JavaScript es genial";
console.log(cadena);
cadena = cadena.replace("Java", "ECMA");
console.log(cadena);

cadena = "Java Script es genial. JavaScript es tremendo";
cadena = cadena.replace("Java", "ECMA");
console.log(cadena); //Solo reemplaza la primera coincidencia
