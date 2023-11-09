// Ejercicioo 238: Usar Symbol() como Propiedad Identificadora de un Objeto.

const ID = Symbol();

let persona = {
  [ID]: "12345",
  nombre: "Moises",
  edad: 22,
};
console.log(persona);
