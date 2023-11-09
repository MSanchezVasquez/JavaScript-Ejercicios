// Ejercicio 221: Usar las Propiedades de un Objeto como Parámetros de una Función.
// Object destructuring

function obtenerNombreES5(objeto) {
  let nombre = objeto.nombre;
  console.log(nombre);
}

let persona = { nombre: "Daniela", edad: 22 };

obtenerNombreES5(persona);

console.log("-----------------");
function obtenerNombreES6({ nombre, edad }) {
  console.log(nombre);
  console.log(edad);
}

obtenerNombreES6(persona);
