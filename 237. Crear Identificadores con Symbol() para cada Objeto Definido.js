// Ejercicio 237: Crear Identificadores con Symbol() para cada Objeto Definido.

let moises = { id: Symbol(), nombre: "Moises", edad: 22, email: "moises.com" };
let daniela = {
  id: Symbol(),
  nombre: "Daniela",
  edad: 21,
  email: "daniela.com",
};

console.log(moises);
console.log(daniela);

console.log(moises.id == daniela.id); //false
