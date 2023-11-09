// Ejercicio 253: La Programación Orientada a Objetos No Existe en JavaScript.

class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }
  saludar() {
    return `Hola soy ${this.nombre}!`;
  }
}

console.log(Persona.prototype); //{}
