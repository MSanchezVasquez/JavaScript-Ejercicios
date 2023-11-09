// Ejercicio 349: Iterar las Propiedades de un Objeto Creado con la Clase Object.

let persona = new Object();
persona.documento = "123456789";
persona.nombre = "Moises";
persona.edad = 22;
persona.email = "moisesup.25@gmail.com";

console.log(persona); /*{
  documento: '123456789',
  nombre: 'Moises',
  edad: 22,
  email: 'moisesup.25@gmail.com'
}*/
console.log(persona.documento); //123456789

Object.keys(persona).forEach((atributo) => {
  console.log(atributo, persona[atributo]);
});
