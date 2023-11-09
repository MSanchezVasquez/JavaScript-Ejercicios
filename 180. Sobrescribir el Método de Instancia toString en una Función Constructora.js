// Ejercicio 180: Sobrescribir el Método de Instancia toString en una Función Constructora.

function Persona(nombre, edad, email) {
  this.nombre = nombre;
  this.edad = edad;
  this.email = email;

  this.mostrarInfo = () => {
    console.log(`Nombre: ${nombre}`);
    console.log(`Edad: ${this.edad}`);
    console.log(`Email: ${this.email}`);
  };

  this.toString = () => {
    return `Nombre: ${this.nombre} - Edad: ${this.edad} - Email: ${this.email}`;
  };
}

let moises = new Persona("Moises", 22, "moises@gmail.com");
console.log(moises.toString()); //Nombre: Moises - Edad: 22 - Email: moises@gmail.com
