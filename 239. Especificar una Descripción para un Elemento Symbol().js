// Ejercicio 239: Especificar una Descripción para un Elemento Symbol().

const ID = Symbol("ID para literal de objeto");

let persona = {
  [ID]: "12345",
  nombre: "Moises",
  edad: 22,
};
console.log(persona); /*{
  nombre: 'Moises',
  edad: 22,
  [Symbol(ID para literal de objeto)]: '12345'
}*/

console.log(
  Symbol("ID para literal de objeto") == Symbol("ID para literal de objeto")
); //false
