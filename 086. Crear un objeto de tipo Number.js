// Ejercicio 86: Crear un objeto de tipo Number

let numero = new Number(10);

console.log(numero);
console.log(typeof numero); //object

console.log(numero instanceof Number); //true

let primitivo = parseInt(numero.toString());
console.log(primitivo);
console.log(typeof primitivo); //number
console.log();

let suma = numero + primitivo;
console.log(typeof suma);
console.log(suma);
