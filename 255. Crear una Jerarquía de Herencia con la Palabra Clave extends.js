// Ejercicio 255: Crear una Jerarquía de Herencia con la Palabra Clave extends.

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludar() {
    return `Hola soy ${this.nombre}!`;
  }
}

class Estudiante extends Persona {
  constructor(nombre, edad, carnet, carrera) {
    super(nombre, edad);
    this.carnet = carnet;
    this.carrera = carrera;
  }
}

let moises = new Estudiante("Moises", 22, "22225417", "Ingenieria");
console.log(moises); /*Estudiante {
                        nombre: 'Moises',
                        edad: 22,
                        carnet: '22225417',
                        carrera: 'Ingenieria'
                      }*/
console.log(moises.saludar()); //Hola soy Moises!
