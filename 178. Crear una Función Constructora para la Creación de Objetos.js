// Ejercicio 178: Crear una Función Constructora para la Creación de Objetos.

function Persona(nombre, apellido, edad, email) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.email = email;
}

let moises = new Persona("Moises", "Sanchez", 22, "moises.com");
console.log(moises); /*Persona {
                      nombre: 'Moises',
                      apellido: 'Sanchez',
                      edad: 22,
                      email: 'moises.com'
                      }*/

//Acceder a los elementos
console.log(moises.nombre); //Moises
console.log(moises.apellido); //Sanchez
console.log(moises.edad); //22
console.log(moises.email); //moises.com
