// Ejercicio 150: Buscar el Índice de un Objeto en un Arreglo a partir de una Propiedad.

let moises = { nombre: "Moises", email: "moises.com", edad: 22 };
let german = { nombre: "German", email: "german.com", edad: 29 };
let angie = { nombre: "Angie", email: "angie.com", edad: 25 };

let persona = [moises, german, angie];
console.log(persona); /*[
  { nombre: 'Moises', email: 'moises.com', edad: 22 },
  { nombre: 'German', email: 'german.com', edad: 29 },
  { nombre: 'Angie', email: 'angie.com', edad: 25 }
]*/
let indice = persona.findIndex((objeto, indice, persona) => {
  return objeto.nombre == "Angie";
});
console.log(indice); //2
