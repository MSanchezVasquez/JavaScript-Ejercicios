// Ejercicio 35: Usar el contenido de una variable en una cadena.

let numero = 6;
let cadena = "JavaScript";

cadena = `JavaScript ${numero}`;
console.log(cadena);
console.log();

let persona = { nombre: "Moises", apellido: "Sanchez", id: 456 };

console.log(
  `Su nombre completo es ` +
    persona.nombre +
    " " +
    persona.apellido +
    " y su ID es: " +
    persona.id
);

console.log(
  `Su nombre completo es ${persona.nombre} ${persona.apellido} y su ID es: ${persona.id}`
);
