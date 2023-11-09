// Ejercicio 176: Obtener el Conjunto de Propiedades de un Objeto con Object.keys().

let persona = {
  nombre: "Moises",
  apellido: "Sanchez",
  edad: 22,
  email: "moises.com",
};
let conjuntoPropiedades = Object.keys(persona);
console.log(conjuntoPropiedades); //[ 'nombre', 'apellido', 'edad', 'email' ]

console.log("-----------------------------------");
conjuntoPropiedades.forEach((valor) => {
  console.log(`Propiedad: ${valor}, -Valor: ${persona[valor]}`);
});
