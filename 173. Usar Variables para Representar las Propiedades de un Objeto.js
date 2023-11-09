// Ejercicio 173: Usar Variables para Representar las Propiedades de un Objeto.

let nombre = "nombre";
let apellido = "apellido";
let edad = "edad";
let email = "email";

let persona = {};
persona[nombre] = "Edward";
persona[apellido] = "Ortiz";
persona[edad] = 33;
persona[email] = "edwar.com";

console.log(persona); //{ nombre: 'Edward', apellido: 'Ortiz', edad: 33, email: 'edwar.com' }

console.log(persona[nombre]);
console.log(persona[apellido]);
console.log(persona[edad]);
console.log(persona[email]);
