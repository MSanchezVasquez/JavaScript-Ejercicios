// Ejercicio 308: Intercambiar 2 Palabras en una Cadena usando Paréntesis Captura con exec().

let nombre = "Moises Sanchez";
let patron = /^(\w+)\s(\w+)$/;
let resultado = patron.exec(nombre);

let nuevoNombre = `${resultado[2]}, ${resultado[1]}`;
console.log(nombre); //Moises Sanchez
console.log(nuevoNombre); //Moises Sanchez
