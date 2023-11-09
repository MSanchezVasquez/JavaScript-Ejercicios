// Ejercicio 252: Crear una Clase de Objeto en ES5 y ES6.

//ECMAScript 5:
let Persona = function Persona(nombre, apellido, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
};

Persona.prototype.saludar = function () {
  return "Hola soy " + this.nombre + "!";
};

let moises = new Persona("Moises", "Sanchez", 22);
console.log(moises); //Persona { nombre: 'Moises', apellido: 'Sanchez', edad: 22 }
console.log(moises.saludar()); //Hola soy Moises!

let daniela = new Persona("Daniela", "Abril", 22);
console.log(daniela); //Persona { nombre: 'Daniela', apellido: 'Abril', edad: 22 }
console.log(daniela.saludar()); //Hola soy Daniela!

//ECMAScript 6:
console.log("------------------------------------------------------------");
class Humano {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }
  saludar() {
    return `Hola soy ${this.nombre}!`;
  }
}

let valentin = new Humano("Valentin", "Juarez", 23);
console.log(valentin); //Humano { nombre: 'Valentin', apellido: 'Juarez', edad: 23 }
console.log(valentin.saludar()); //Hola soy Valentin!
