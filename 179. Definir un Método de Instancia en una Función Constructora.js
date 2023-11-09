// Ejercicio 179: Definir un Método de Instancia en una Función Constructora.

function Persona(nombre, edad, email) {
  this.nombre = nombre;
  this.edad = edad;
  this.email = email;

  this.mostrarInfo = () => {
    console.log("Nombre: ", this.nombre);
    console.log("Edad: ", this.edad);
    console.log("Email: ", this.email);
  };
}

let moises = new Persona("Moises", 22, "moises@gmail.com");
console.log(moises); /*Persona {
                      nombre: 'Moises',
                      edad: 22,
                      email: 'moises@gmail.com',
                      mostrarInfo: [Function (anonymous)]
                      }*/

moises.mostrarInfo(); /*Nombre:  Moises
                        Edad:  22
                        Email:  moises@gmail.com*/

console.log("-----------------------------");
let daniela = new Persona("Daniela", 26, "daniela@gmail.com");
console.log(daniela); /*Persona {
                        nombre: 'Daniela',
                        edad: 26,
                        email: 'daniela@gmail.com',
                        mostrarInfo: [Function (anonymous)]
                        }*/

daniela.mostrarInfo(); /*Nombre:  Daniela
                         Edad:  26
                         Email:  daniela@gmail.com*/
