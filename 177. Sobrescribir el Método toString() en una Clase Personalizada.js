// Ejercicio 177: Sobrescribir el Método toString() en una Clase Personalizada.

class Persona {
  constructor(nombre, apellido, edad, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.email = email;
  }

  mostrarDatos() {
    console.log("Nombre: ", this.nombre);
    console.log("Apellido: ", this.apellido);
    console.log("Edad: ", this.edad);
    console.log("Email: ", this.email);
  }

  toString() {
    return `Nombre: ${this.nombre} - Apellido: ${this.apellido} - Edad: ${this.edad} - Email: ${this.email}`;
  }
}

let persona = new Persona("Moises", "Sanchez", 22, "moises.com");
console.log(persona);
console.log(persona.toString()); //Nombre: Moises - Apellido: Sanchez - Edad: 22 - Email: moises.com
