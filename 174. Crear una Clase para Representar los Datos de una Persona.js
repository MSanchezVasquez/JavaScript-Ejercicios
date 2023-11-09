// Ejercicio 174: Crear una Clase para Representar los Datos de una Persona.

class Persona {
  constructor(nombre, apellido, edad, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.email = email;
  }
}

let persona = new Persona("Moises", "Sanchez", 22, "moises.com");
console.log(persona);

console.log(persona.nombre); //Moises
console.log(persona.apellido); //Sanchez
console.log(persona.edad); //22
console.log(persona.email); //moises.com
