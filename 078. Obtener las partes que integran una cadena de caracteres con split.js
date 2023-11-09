// Ejercicio 78: Obtener las partes o palabras que integran una cadena de caracteres con split.

let cadena = "JavaScript es un lenguaje de programacion";
let palabras = cadena.split(" ");
console.log(palabras);

cadena = "xyz";
palabras = cadena.split("y");
console.log(palabras);

let ruta = "/var/www/html/sanchez";
let partes = ruta.split("/");
console.log(partes);

partes = ruta.split(/\//g);
console.log(partes);
