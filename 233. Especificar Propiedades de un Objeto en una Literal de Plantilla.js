// Ejercicio 233: Especificar Propiedades de un Objeto en una Literal de Plantilla.

let persona = {
  nombre: "Moises",
  apellido: "Sanchez",
  email: "moises@gmail.com",
};
let frase = `Su nombre es: ${persona.nombre} y su correo es: ${persona.email}`;
console.log(frase);
