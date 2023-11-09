// Ejercicio 294: Estudiar el Concepto de Literal de un Valor Específico de un Tipo.

let nombre = "Moises";
let numero = 2;
let precio = 29.13;
let llueve = false;
let corre = true;

let persona = {
  nombre: "Moises",
  edad: 29,
};
console.log(typeof nombre); //string
console.log(typeof numero); //number
console.log(typeof precio); //number
console.log(typeof llueve); //boolean
console.log(typeof corre); //boolean
console.log(typeof persona); //object

for (e in persona) {
  console.log(persona[e]);
}
