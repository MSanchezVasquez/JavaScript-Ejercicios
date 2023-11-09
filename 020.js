// Ejercicio 20: Validar si una variable es de tipo Date.

let x = new Date();
let y = "";
let z = 2.71;
let w = "May 13, 1993";

if (x instanceof Date) {
  console.log('La variable "x" es de tipo Date.');
} else {
  console.log('La variable "x" no es de tipo Date.');
}

console.log("----------------------------------------");
if (y instanceof Date) {
  console.log('La variable "y" es de tipo Date.');
} else {
  console.log('La variable "y" no es de tipo Date.');
}

console.log("----------------------------------------");
if (z instanceof Date) {
  console.log('La variable "z" es de tipo Date.');
} else {
  console.log('La variable "z" no es de tipo Date.');
}

console.log("----------------------------------------");
if (w instanceof Date) {
  console.log('La variable "w" es de tipo Date.');
} else {
  console.log('La variable "w" no es de tipo Date.');
}
