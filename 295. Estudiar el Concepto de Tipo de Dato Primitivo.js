// Ejercicio 295: Estudiar el Concepto de Tipo de Dato Primitivo.
// string, number, boolean, null, undefined.

let nombre = "Moises";
let precio = 299.99;
let llueve = false;
let valor = null;
let noDisponible = undefined;

console.log(nombre.length); //6
console.log(precio.toString()); //299.99
console.log(llueve.valueOf()); //false

let nombre2 = String("Moises");
let precio2 = Number("299.99");
let llueve2 = Boolean("false");

if (nombre === nombre2) {
  console.log("Son iguales los contenidos de las variables");
} else {
  console.log("No son iguales los contenidos de las variables");
}

let nombre3 = new String("Moises");
if (nombre === nombre3) {
  console.log("Son iguales los contenidos de las variables");
} else {
  console.log("No son iguales los contenidos de las variables");
}

console.log("Edward".length); //6
