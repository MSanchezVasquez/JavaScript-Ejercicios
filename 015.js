// Ejercicio 15: Averiguar si una variable definida es de tipo de dato numérico

let a = 5.3;
let b = Number("1.23");
let c = "";
let d = new Date();

if (typeof a === "number") {
  console.log('La variable "a" es numérica');
} else {
  console.log('La variable"a" no es numérica');
}
console.log("---------------------------------");
if (typeof b === "number") {
  console.log('La variable "b" es numérica');
} else {
  console.log('La variable"b" no es numérica');
}
console.log("---------------------------------");
if (typeof c === "number") {
  console.log('La variable "c" es numérica');
} else {
  console.log('La variable"c" no es numérica');
}
console.log("---------------------------------");
if (typeof d === "number") {
  console.log('La variable "d" es numérica');
} else {
  console.log('La variable"d" no es numérica');
}
