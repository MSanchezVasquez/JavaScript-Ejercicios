// Ejercicio 175: Crear un Método de Instancia en una Clase Personalizada.

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
}

let persona = new Persona("Moises", "Sanchez", 22, "moises.com");

persona.mostrarDatos(); /*Nombre:  Moises
                          Apellido:  Sanchez
                          Edad:  22
                          Email:  moises.com*/
