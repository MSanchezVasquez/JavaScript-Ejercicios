// Ejercicio 33: Obtener y recorrer las llaves de un objeto.

let persona = {
  id: 101,
  nombre: "Moises",
  apellido: "Sanchez",
  correo: "moisesup.25@gmail.com",
};

console.log(typeof Object.keys(persona));
console.log(Object.keys(persona) instanceof Array);
console.log(Object.keys(persona));
console.log();
Object.keys(persona).forEach((valor) => {
  console.log(valor);
});
