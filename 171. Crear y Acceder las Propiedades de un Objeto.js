// Ejercicio 171: Crear y Acceder las Propiedades de un Objeto.

let persona = {};
console.log(persona); //{}
persona.nombre = "Daniela";
persona["email"] = "daniela.com";
persona["correo-e"] = "daniela@outlook.com";
console.log(persona); //{ nombre: 'Daniela', email: 'daniela.com' }

persona.edad = 26;

console.log(persona.nombre); //Daniela
console.log(persona["nombre"]); //Daniela
console.log(persona["correo-e"]); //daniela@outlook.com
